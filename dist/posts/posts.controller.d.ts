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
    createUser(createPostDto: CreatePostDto, userId: string): Promise<{
        message: string;
        newPost: import("mongoose").Document<unknown, {}, import("./schema/post.schema").Post, {}, {}> & import("./schema/post.schema").Post & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
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
