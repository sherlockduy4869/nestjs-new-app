import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello anh Duy, em phai rua bat day!';
  }
}
