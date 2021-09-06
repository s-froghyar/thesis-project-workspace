import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { S3Service } from './s3.service';

@Controller('s3')
export class S3Controller {
  constructor(private readonly service: S3Service) {}

  @Get()
  getS3Urls(): Promise<any> {
    return this.service.getS3Urls();
  }

  @Post()
  @UseInterceptors(FileInterceptor('song'))
  async uploadFile(@UploadedFile() file) {
    const result = await this.service.uploadSongToS3(file);
    return { success: true };
  }
}
