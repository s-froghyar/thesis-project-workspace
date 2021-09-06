import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { S3Module } from 'nestjs-s3';
import { S3Controller } from './s3/s3.controller';
import { S3Service } from './s3/s3.service';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    S3Module.forRoot({
      config: {
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_KEY,
        region: process.env.AWS_SECRET_KEY,
        endpoint: 'https://s3.eu-west-2.amazonaws.com',
        s3ForcePathStyle: true,
        signatureVersion: 'v4',
      }
    }),
    MulterModule.register({
      dest: './upload',
    }),
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [AppController, S3Controller],
  providers: [AppService, S3Service],
})
export class AppModule {}
