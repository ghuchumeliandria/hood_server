import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): string;
    followUser(targetUserId: string, userId: string): Promise<{
        message: string;
        updatedUser: (import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, {}> & import("./schema/user.schema").User & {
            _id: import("mongoose").Types.ObjectId;
        } & {
            __v: number;
        }) | null;
    }>;
    getAllUsers(userId: string): Promise<(import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, {}> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    getUser(userId: string): Promise<import("mongoose").Document<unknown, {}, import("./schema/user.schema").User, {}, {}> & import("./schema/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    findOne(id: string): string;
    update(id: string, updateUserDto: UpdateUserDto): string;
    remove(id: string): string;
}
