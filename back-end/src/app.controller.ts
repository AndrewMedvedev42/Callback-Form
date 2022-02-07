import { Controller, Get, Post, Body } from '@nestjs/common';
import { FormDataDto } from "./models/data.dto";
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/api/send-message')
  create(@Body() formData:FormDataDto): any {
    return formData;
  }
}

// appService.getHello()