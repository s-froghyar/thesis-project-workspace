import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
// radial-gradient(circle, rgba(101,164,144,1) 15%, rgba(47,79,79,1) 85%);
// linear-gradient(90deg, rgb(47, 79, 79) 0%, rgb(101, 164, 144) 50%, rgb(47, 79, 79) 100%)