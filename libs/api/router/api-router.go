package router

import (
	"net/http"
	"somaf-ws/libs/api/handlers"
	"somaf-ws/libs/api/internals/data"

	"github.com/hashicorp/go-hclog"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
)

func New(l hclog.Logger) (e *echo.Echo) {

	d := data.NewService(l)
	e = echo.New()
	e.HideBanner = true

	e.Use(middleware.BodyLimit("3M"))
	e.Use(middleware.CORSWithConfig(middleware.CORSConfig{
		AllowMethods: []string{http.MethodGet, http.MethodPost},
	}))

	inferenceHandler := handlers.NewInferenceHandler(l, d)

	e.POST("custom", inferenceHandler.RunInferenceOnSong)

	return
}
