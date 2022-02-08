import { Injectable } from '@nestjs/common';
import {from, Observable } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FormDataDto } from "../models/data.dto";
import { MessageDataEntity } from "./message.entity";

@Injectable()
export class MessagesService {
    constructor(
        @InjectRepository(MessageDataEntity)
        private readonly callbackDataRepository: Repository<MessageDataEntity>
    ){}
    storeCallback(formData:FormDataDto):Observable<FormDataDto>{
        return from(this.callbackDataRepository.save(formData))
    }
}
