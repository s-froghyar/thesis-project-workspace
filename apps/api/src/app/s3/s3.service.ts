import { Injectable } from '@nestjs/common';
import { InjectS3, S3 } from 'nestjs-s3';
import { v4 as uuidv4 } from 'uuid';
import { createReadStream } from 'fs';

@Injectable()
export class S3Service {
  constructor(@InjectS3() private readonly s3: S3) {}

  async getS3Urls(): Promise<any> {
    try {
      return await this.s3.getSignedUrlPromise('getObject', {
        Bucket: 'mgr-thesis-bucket',
        Key: uuidv4(),
      });
    } catch (error) {
      console.log('lmaoooooooo');
    }
  }

  uploadSongToS3(file) {
    const fileBuffer = createReadStream(file.path);

    const params = {
      Bucket: 'mgr-thesis-bucket',
      Body: fileBuffer,
      // ACL: 'public-read',
      Key: `dynamic/audio/${uuidv4()}`,
    };
    return this.s3.upload(params).promise();
  }
}
