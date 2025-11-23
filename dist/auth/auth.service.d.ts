import { SignUpDto } from './dto/signup.dto';
import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';
export declare class AuthService {
    private userModel;
    private jwtService;
    constructor(userModel: Model<User>, jwtService: JwtService);
    signUp({ fullname, email, password, confirmPassword }: SignUpDto): Promise<{
        message: string;
        data: {
            fullname: string;
            email: string;
            id: import("mongoose").Types.ObjectId;
        };
    }>;
    signIn({ email, password }: SignInDto): Promise<{
        token: string;
    }>;
}
