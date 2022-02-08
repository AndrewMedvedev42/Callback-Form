import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CallbacksModule } from './messages/messages.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'postgres',
      host:null,
      port:null,
      username:null,
      password: null,
      database: null,
      entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
    }),
    CallbacksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
