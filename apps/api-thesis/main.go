package main

import (
	"context"
	"fmt"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"

	"somaf-ws/libs/api/router"

	"github.com/hashicorp/go-hclog"
	"github.com/labstack/echo/v4"
)

var (
	l hclog.Logger
	r *echo.Echo
)

func init() {
	fmt.Print("Starting server...")
	l = hclog.Default()
	// c = config.LoadConfig("../../")
	r = router.New(l)
	fmt.Print("Success!\n")
}

func main() {
	fmt.Println("\n   _____                       ______\n  / ___/____  ____ ___  ____ _/ ____/\n  \\__ \\/ __ \\/ __ `__ \\/ __ `/ /_    \n ___/ / /_/ / / / / / / /_/ / __/    \n/____/\\____/_/ /_/ /_/\\__,_/_/       \n                                     \n")
	go func() {
		if err := r.Start("localhost:9090"); err != nil && err != http.ErrServerClosed {
			l.Error("Shutting down ze server lads", err)
		}
	}()

	quit := make(chan os.Signal, 1)
	signal.Notify(quit, os.Interrupt, os.Kill, syscall.SIGTERM, syscall.SIGINT)

	<-quit

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	defer cancel()
	if err := r.Shutdown(ctx); err != nil {
		l.Error("Some shit is going down when shutting down", err)
	}
}
