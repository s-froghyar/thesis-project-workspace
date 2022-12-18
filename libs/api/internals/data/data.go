package data

import (
	"bufio"
	"context"
	"mime/multipart"
	"net/http"
	"os"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/feature/s3/manager"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/google/uuid"
	"gopkg.in/yaml.v2"

	"github.com/hashicorp/go-hclog"
)

type CustomFileConfig struct {
	Id        string `yaml:"id"`
	Model     string `yaml:"model"`
	Transform string `yaml:"transform"`
}

type S3ConnectionData struct {
	Bucket    string
	Prefix    string
	Delimiter string
}

type DataService struct {
	l              hclog.Logger
	c              *s3.Client
	connectionData *S3ConnectionData
}

func NewService(l hclog.Logger) *DataService {
	ctx := context.Background()
	cfg, err := config.LoadDefaultConfig(ctx, config.WithRegion("eu-west-2"))
	checkInitErr(err)

	client := s3.NewFromConfig(cfg)

	return &DataService{l, client, &S3ConnectionData{
		Bucket:    "mgr-thesis-bucket",
		Prefix:    "custom",
		Delimiter: "/",
	}}
}

func (d *DataService) UploadSong(id string, song multipart.File) (err error) {
	// fileInfo, err := f.Stat()
	// if err != nil {
	// 	return
	// }

	// var fileSize int64 = fileInfo.Size()
	// fileBuffer := make([]byte, fileSize)
	uploader := manager.NewUploader(d.c, func(u *manager.Uploader) {
		// Define a strategy that will buffer 25 MiB in memory
		u.BufferProvider = manager.NewBufferedReadSeekerWriteToPool(25 * 1024 * 1024)
	})
	_, err = uploader.Upload(context.TODO(), &s3.PutObjectInput{
		Bucket: &d.connectionData.Bucket,
		Key:    aws.String("custom/" + id + "/input/sample.wav"),
		Body:   song,
	})

	return
}

func (d *DataService) CreateYamlConfig(model string, transform string) (id string, err error) {
	id = uuid.New().String()
	conf := CustomFileConfig{Id: id, Model: model, Transform: transform}
	yamlConfig, err := yaml.Marshal(&conf)

	if err != nil {
		return
	}
	// Config file generation
	err = createConfigFile(yamlConfig)
	if err != nil {
		return
	}
	defer os.Remove("/tmp/config")

	//Upload file to S3
	err = d.uploadYamlToS3(id)

	return
}

func (d *DataService) uploadYamlToS3(id string) (err error) {
	f, err := os.Open("/tmp/config")
	defer f.Close()
	fileInfo, err := f.Stat()
	if err != nil {
		return
	}

	var fileSize int64 = fileInfo.Size()
	fileBuffer := make([]byte, fileSize)

	uploader := manager.NewUploader(d.c)
	_, err = uploader.Upload(context.TODO(), &s3.PutObjectInput{
		Bucket:        &d.connectionData.Bucket,
		Key:           aws.String("custom/" + id + "/config.yml"),
		Body:          f,
		ContentLength: *aws.Int64(fileSize),
		ContentType:   aws.String(http.DetectContentType(fileBuffer)),
	})

	// Upload file to S3 bucket
	return
}

func checkInitErr(err error) {
	if err != nil {
		panic(err)
	}
}

func createConfigFile(content []byte) (err error) {
	f, err := os.Create("/tmp/config")
	defer f.Close()
	if err != nil {
		return
	}

	w := bufio.NewWriter(f)
	_, err = w.Write(content)
	w.Flush()

	return
}
