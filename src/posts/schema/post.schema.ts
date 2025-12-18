import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Types } from "mongoose";
import { User } from "src/users/schema/user.schema";

@Schema({timestamps : true})

export class Post {
    @Prop({
        type : Types.ObjectId,
        ref : User.name,
        required : true
    })
    authorId : Types.ObjectId

    @Prop({
        type : String,
        required : false 
    })
    title : string


    @Prop({
        type : String,
        required : false
    })
    imageUrl : string

    @Prop({
        type : [String],
        default : []
    })
    likes : [string]

    
}

export const postSchema = SchemaFactory.createForClass(Post)