import mongoose, { Types } from "mongoose";
export declare class User {
    fullname: string;
    email: string;
    password: string;
    role: string;
    avatar: string;
    following: Types.ObjectId[];
}
export declare const userSchema: mongoose.Schema<User, mongoose.Model<User, any, any, any, mongoose.Document<unknown, any, User, any, {}> & User & {
    _id: Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, User, mongoose.Document<unknown, {}, mongoose.FlatRecord<User>, {}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & mongoose.FlatRecord<User> & {
    _id: Types.ObjectId;
} & {
    __v: number;
}>;
