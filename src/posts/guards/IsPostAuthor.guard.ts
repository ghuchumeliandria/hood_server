import { InjectModel } from "@nestjs/mongoose";
import { isValidObjectId, Model } from "mongoose";
import { Post } from "../schema/post.schema";
import { BadRequestException, CanActivate, ExecutionContext } from "@nestjs/common";
import { User } from "src/users/schema/user.schema";
import { Observable } from "rxjs";



export class IsPostAuthor implements CanActivate{
    constructor(
        @InjectModel("post") private postModel : Model<Post>,
        @InjectModel("user") private userModel : Model<User>
    ){}

    async canActivate(context: ExecutionContext):   Promise<boolean> {
        const req = context.switchToHttp().getRequest()
        const {id : postId } = req.params
        if(!isValidObjectId(postId) || !isValidObjectId(req.userId)) throw new BadRequestException("invalid id")

        const post = await this.postModel.findById(postId)
        if(!post) throw new BadRequestException("post not found")
            
            
        const user = await this.userModel.findById(req.userId)
        if(!user) throw new BadRequestException("user not found")
            
        if(post.authorId !== req.userId.toString()) throw new BadRequestException("you don't have a permission to delete this post")
        return true
    }
}