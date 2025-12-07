import { Types } from "mongoose";
export declare class Post {
    authorId: Types.ObjectId;
    title: string;
    content: string;
    imageUrl: string;
    likes: [string];
}
export declare const postSchema: import("mongoose").Schema<Post, import("mongoose").Model<Post, any, any, any, import("mongoose").Document<unknown, any, Post, any, {}> & Post & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Post, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Post>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<Post> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
