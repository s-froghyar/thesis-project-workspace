package handlers

import (
	"github.com/hashicorp/go-hclog"
	"github.com/labstack/echo/v4"
)

type Upload struct {
	l hclog.Logger
}

func NewUploadHandler(l hclog.Logger) *Upload {
	return &Upload{l}
}

func (uh *Upload) UploadSong(c echo.Context) (err error) {
	uh.l.Info("lmaooo")
	return
}
