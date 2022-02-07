import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  postData(): string {
    return 'Hello World!';
  }
}
