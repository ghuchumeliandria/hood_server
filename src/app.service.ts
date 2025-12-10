import { BadRequestException, Injectable } from '@nestjs/common';
import { isValidObjectId } from 'mongoose';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  
}

