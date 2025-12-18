import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';
import { Post } from 'src/posts/schema/post.schema';
export declare class UsersService {
    private userModel;
    private postModel;
    constructor(userModel: Model<User>, postModel: Model<Post>);
    create(createUserDto: CreateUserDto): string;
    followUser(targetUserId: string, userId: string): Promise<{
        message: string;
        updatedUser: (import("mongoose").Document<unknown, {}, User, {}, {}> & User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null;
    }>;
    getAllUsers(userId: string): Promise<(import("mongoose").Document<unknown, {}, User, {}, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getUser(userId: string): Promise<import("mongoose").Document<unknown, {}, User, {}, {}> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateUserDto: UpdateUserDto): string;
    remove(id: string): Promise<string>;
}
