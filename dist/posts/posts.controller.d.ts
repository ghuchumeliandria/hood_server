import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getPosts(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schema/post.schema").Post, {}, {}> & import("./schema/post.schema").Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schema/post.schema").Post, {}, {}> & import("./schema/post.schema").Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, {}, import("./schema/post.schema").Post, "find", {}>;
    getFeedPosts(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/post.schema").Post, {}, {}> & import("./schema/post.schema").Post & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    createUser(createPostDto: CreatePostDto, userId: string): Promise<{
        message: string;
        populatedPost: Omit<import("mongoose").Document<unknown, {}, import("./schema/post.schema").Post, {}, {}> & import("./schema/post.schema").Post & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }, never>;
    }>;
    deletePost(postId: string): Promise<{
        message: string;
        post: (import("mongoose").Document<unknown, {}, import("./schema/post.schema").Post, {}, {}> & import("./schema/post.schema").Post & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null;
    }>;
}
