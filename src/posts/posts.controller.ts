import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { IsAuthGuard } from 'src/auth/guards/IsAuth.Guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UserId } from 'src/decorators/userId';
@UseGuards(IsAuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post('create-post')
  createUser(@Body() createPostDto : CreatePostDto , @UserId()  userId : string ){
    return this.postsService.createPost(createPostDto , userId)
  }
}
