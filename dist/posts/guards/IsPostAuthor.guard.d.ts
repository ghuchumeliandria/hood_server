import { Model } from "mongoose";
import { Post } from "../schema/post.schema";
import { CanActivate, ExecutionContext } from "@nestjs/common";
import { User } from "src/users/schema/user.schema";
export declare class IsPostAuthor implements CanActivate {
    private postModel;
    private userModel;
    constructor(postModel: Model<Post>, userModel: Model<User>);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
