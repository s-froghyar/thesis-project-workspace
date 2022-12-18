package handlers

import (
	"net/http"

	"somaf-ws/libs/api/internals/data"

	"github.com/hashicorp/go-hclog"
	"github.com/labstack/echo/v4"
)

type Inference struct {
	l hclog.Logger
	d *data.DataService
}

func NewInferenceHandler(l hclog.Logger, d *data.DataService) *Inference {
	return &Inference{l, d}
}

func (ih *Inference) RunInferenceOnSong(c echo.Context) (err error) {
	ih.l.Info("lmaooo")
	model := c.FormValue("model")
	transform := c.FormValue("transform")

	songFileSrc, err := c.FormFile("customSong")
	if err != nil {
		panic(err)
	}

	// Create yaml config and upload to s3 bucket
	id, err := ih.d.CreateYamlConfig(model, transform)
	if err != nil {
		ih.l.Info("Creating yaml config failedwith err: ", err)
		return
	}
	// Upload wav (check for max size not breached)
	sf, err := songFileSrc.Open()
	if err != nil {
		return
	}
	defer sf.Close()
	ih.d.UploadSong(id, sf)

	// uh.l.Info(model)
	// uh.l.Info(transform)

	c.JSON(http.StatusCreated, "szia Anna milyen a napod eletem?")
	return
}
