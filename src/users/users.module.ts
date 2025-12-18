import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './schema/user.schema';
import { postSchema } from 'src/posts/schema/post.schema';

@Module({
  imports : [ConfigModule.forRoot({
        isGlobal : true
      }),
       MongooseModule.forFeature([
            {schema : userSchema , name : 'User'},
            {schema : postSchema , name : 'post'},
          ]),
        ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
