import { IsOptional, IsString } from "class-validator";


export class CreatePostDto {

    @IsOptional()
    @IsString()
    title? : string

    @IsOptional()
    @IsString()
    content? : string

    @IsOptional()
    @IsString()
    imageUrl? : string
    
}