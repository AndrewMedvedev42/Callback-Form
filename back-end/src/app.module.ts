import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallbacksModule } from './messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal:true}),
    TypeOrmModule.forRoot({
      type:'postgres',
      host: process.env.POSTDRES_HOST,
      port: Number(process.env.POSTDRES_PORT),
      username: process.env.POSTDRES_USER,
      password: process.env.POSTDRES_PASSWORD,
      database: "callback_messages",
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    CallbacksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
