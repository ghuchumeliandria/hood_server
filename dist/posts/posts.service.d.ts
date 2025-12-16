import { Model, Types } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { Post } from './schema/post.schema';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsService {
    private userModel;
    private postModel;
    constructor(userModel: Model<User>, postModel: Model<Post>);
    getPosts(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, Post, {}, {}> & Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, Post, {}, {}> & Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    }, {}, Post, "find", {}>;
    createPost({ title, imageUrl }: CreatePostDto, userId: string): Promise<{
        message: string;
        populatedPost: Omit<import("mongoose").Document<unknown, {}, Post, {}, {}> & Post & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }, never>;
    }>;
    getFeedPosts(userId: string): Promise<(import("mongoose").Document<unknown, {}, Post, {}, {}> & Post & {
        _id: Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    deletePost(postId: string): Promise<{
        message: string;
        post: (import("mongoose").Document<unknown, {}, Post, {}, {}> & Post & {
            _id: Types.ObjectId;
        } & {
            __v: number;
        }) | null;
    }>;
}
