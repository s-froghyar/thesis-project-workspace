package handlers

import (
	"net/http"
	"somaf-ws/libs/api/internals/data"

	"github.com/hashicorp/go-hclog"
	"github.com/labstack/echo/v4"
)

type Upload struct {
	l hclog.Logger
	d *data.DataService
}

func NewUploadHandler(l hclog.Logger, d *data.DataService) *Upload {
	return &Upload{l, d}
}

func (uh *Upload) UploadSong(c echo.Context) (err error) {
	uh.l.Info("lmaooo")
	model := c.FormValue("model")
	transform := c.FormValue("transform")

	uh.l.Info(model)
	uh.l.Info(transform)

	c.JSON(http.StatusCreated, "szia Anna milyen a napod eletem?")
	return
}
