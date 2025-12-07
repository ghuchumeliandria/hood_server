import { Model, Types } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { Post } from './schema/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsService {
    private userModel;
    private postModel;
    constructor(userModel: Model<User>, postModel: Model<Post>);
    createPost({ title, content, imageUrl }: CreatePostDto, userId: string): Promise<{
        message: string;
        newPost: import("mongoose").Document<unknown, {}, Post, {}, {}> & Post & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
}
