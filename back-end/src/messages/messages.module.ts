import { Module } from '@nestjs/common'; 
import { TypeOrmModule } from "@nestjs/typeorm";
import { MessageController } from "./messages.controllers";
import { MessageDataEntity } from "./message.entity";
import { MessagesService } from './messages.service';

@Module({
  imports:[
    TypeOrmModule.forFeature([MessageDataEntity])
  ],
  providers: [MessagesService],
  controllers:[MessageController]
})
export class CallbacksModule {}
