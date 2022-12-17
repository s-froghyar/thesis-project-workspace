package data

import (
	"context"

	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	"github.com/hashicorp/go-hclog"
)

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
	check(err)

	client := s3.NewFromConfig(cfg)

	return &DataService{l, client, &S3ConnectionData{
		Bucket:    "mgr-thesis-bucket",
		Prefix:    "custom",
		Delimiter: "/",
	}}
}

func check(err error) {
	if err != nil {
		panic(err)
	}
}
