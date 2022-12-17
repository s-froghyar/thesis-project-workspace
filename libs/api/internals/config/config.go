package config

import (
	"fmt"

	"github.com/spf13/viper"
)

type AppConfig struct {
	randoConfigValue string `mapstructure:"RANDOM_CONFIG"`
}

func LoadConfig(p string) (config AppConfig) {
	viper.AddConfigPath(p)
	viper.SetConfigName("app")
	viper.SetConfigType("env")
	viper.AutomaticEnv()

	err := viper.ReadInConfig()
	check(err)

	err = viper.Unmarshal(&config)
	check(err)

	return
}

func check(err error) {
	if err != nil {
		fmt.Println("Problem when unmarshalling viper env config")
		panic(err)
	}
}
