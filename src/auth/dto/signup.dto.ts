import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class SignUpDto  {
    @IsNotEmpty()
    @IsString()
    fullname : string
    @IsNotEmpty()
    @IsEmail()
    email : string
    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: ' password must be at least 8 characters long' })
    @MaxLength(20, { message: ' password must be at least 20 characters long' })
    password : string
    
    @IsNotEmpty()
    @IsString()
    @MinLength(8, { message: 'Confirm password must be at least 8 characters long' })
    @MaxLength(20, { message: 'Confirm password must be at least 20 characters long' })
    confirmPassword : string


}
