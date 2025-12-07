import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model, Types } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { Post } from './schema/post.schema';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {

    constructor(@InjectModel('user') private userModel : Model<User>,
    @InjectModel('post') private postModel : Model<Post>
){}

    async createPost({title , content,imageUrl} : CreatePostDto , userId : string){

        if(!isValidObjectId(userId) ) throw new BadRequestException("user not found ")

        const newPost = await this.postModel.create({
            title,content,imageUrl,
            authorId: userId
        })
        console.log(userId)

        return{message : "post created successfully" , newPost}
    }

}
