import { Controller, Get, Post, Body } from '@nestjs/common';
import {from, Observable } from 'rxjs';
import { FormDataDto } from 'src/models/data.dto';
import { MessagesService } from './messages.service';

@Controller()
export class MessageController {
    constructor(private callbackService:MessagesService){}
  @Post('/api/send-message')
  create(@Body() formData:FormDataDto):Observable<FormDataDto> {
    return from(this.callbackService.storeCallback(formData));
  }
}