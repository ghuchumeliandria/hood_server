import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { SignInDto } from './dto/signin.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signUp(signUpDto: SignUpDto): Promise<{
        message: string;
        data: {
            fullname: string;
            email: string;
            id: import("mongoose").Types.ObjectId;
        };
    }>;
    signIn(signInDto: SignInDto): Promise<{
        token: string;
    }>;
}
