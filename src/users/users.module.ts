import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';

@Module({
  imports : [ConfigModule.forRoot({
        isGlobal : true
      }),
       MongooseModule.forFeature([
            {schema : userSchema , name : 'user'},
          ]),
        ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
