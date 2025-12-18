import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { IsAuthGuard } from 'src/auth/guards/IsAuth.Guard';
import { CreatePostDto } from './dto/create-post.dto';
import { UserId } from 'src/decorators/userId';
import { IsPostAuthor } from './guards/IsPostAuthor.guard';
@UseGuards(IsAuthGuard)
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get('')
  getPosts(){
    return this.postsService.getPosts()
  }
  
  @Get('feed')  
  getFeedPosts(@UserId() userId : string){
    return this.postsService.getFeedPosts(userId)
  }
 
  @Post('create-post')
  createUser(@Body() createPostDto : CreatePostDto , @UserId()  userId : string ){
    return this.postsService.createPost(createPostDto , userId)
  }

  @Post('post-like/:id')
  postLike(@Param('id') postId : string , @UserId() userId : string , ){
    return this.postsService.postLike(postId , userId)
  }

  @UseGuards(IsPostAuthor)
  @Delete("delete-post/:id")
  deletePost(@Param('id') postId : string ){
    return this.postsService.deletePost(postId)
  }




}
