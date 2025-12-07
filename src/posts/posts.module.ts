import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from 'src/users/schema/user.schema';
import { postSchema } from './schema/post.schema';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports : [ConfigModule.forRoot({
      isGlobal : true
    }),
     MongooseModule.forFeature([
          {schema : userSchema , name : 'user'},
          {schema : postSchema , name : 'post'},
        ]),
      ],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
