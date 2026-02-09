import { Injectable } from '@nestjs/common';
import { PI } from '@repo/shared';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! Pi is' + PI;
  }
}
