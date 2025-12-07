import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    createUser(createPostDto: CreatePostDto, userId: string): Promise<{
        message: string;
        newPost: import("mongoose").Document<unknown, {}, import("./schema/post.schema").Post, {}, {}> & import("./schema/post.schema").Post & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        };
    }>;
}
