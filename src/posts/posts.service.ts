import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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
    async createPost({title ,imageUrl} : CreatePostDto , userId : string){

        if(!isValidObjectId(userId) ) throw new BadRequestException("user not found ")

        const newPost = await this.postModel.create({
            title,imageUrl,
            authorId: userId
        })

        const populatedPost = await newPost.populate('authorId', 'fullname avatar')


        return{message : "post created successfully" , populatedPost}
    }

    async getFeedPosts(userId : string){
        if (!isValidObjectId(userId)) throw new BadRequestException("Invalid id");

        const user = await this.userModel.findById(userId).select("following");
        if (!user) throw new BadRequestException("User not found");
      
        const followingIds = user.following.map(id => id.toString());
        const feedIds = [userId, ...followingIds]; 
      
        const posts = await this.postModel
          .find({ authorId: { $in: feedIds } })
          .sort({ createdAt: -1 }).populate('authorId', 'fullname avatar').lean();
      
          return posts.map(post => ({
            ...post,
            isLiked: post.likes.some(
              (likeId: any) => likeId.toString() === userId
            ),
            likesCount: post.likes.length, 
          }));
        
        
    }

    async deletePost(postId : string ){
        if(!isValidObjectId(postId) ) throw new BadRequestException("Invalid id")
        
        const post = await this.postModel.findByIdAndDelete(postId)

        return {message : 'post deleted successfully' , post}
    }


    async postLike(postId : string , userId : string){
        if(!isValidObjectId(postId) || !isValidObjectId(userId)) throw new BadRequestException("invalid id")

            const post = await this.postModel.findById(postId)
            if (!post) throw new NotFoundException('post not found')

            const isLiked = post.likes.includes(userId)

            if(isLiked){
                await this.postModel.findByIdAndUpdate(postId , {
                    $pull : {likes : userId}
                }
            )
            } else {
                await this.postModel.findByIdAndUpdate(postId , {
                    $addToSet : {likes : userId}
                })
            }

            return {liked : !isLiked}

    }


}
