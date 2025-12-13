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

getPosts(){
   return this.postModel.find()
}
    async createPost({title , content,imageUrl} : CreatePostDto , userId : string){

        if(!isValidObjectId(userId) ) throw new BadRequestException("user not found ")

        const newPost = await this.postModel.create({
            title,content,imageUrl,
            authorId: userId
        })

        return{message : "post created successfully" , newPost}
    }

    async getFeedPosts(userId : string){
        if(!isValidObjectId(userId)) throw new BadRequestException("Invalid id")
        const user = await this.userModel.findById(userId).select("following")

        if(!user) throw new BadRequestException("user not found")

            
            const followingIds = user.following.map(id => id.toString())

  const posts = await this.postModel
    .find({ authorId: { $in: followingIds } })
    .sort({ createdAt: -1 })

    return {message : "all posts successfully return" , posts}
        
    }

    async deletePost(postId : string ){
        if(!isValidObjectId(postId) ) throw new BadRequestException("Invalid id")
        
        const post = await this.postModel.findByIdAndDelete(postId)

        return {message : 'post deleted successfully' , post}
    }


}
