import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { isValidObjectId, Model } from 'mongoose';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from 'src/posts/schema/post.schema';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private userModel : Model<User>,
 @InjectModel('post') private postModel : Model<Post>
){}

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }
  async followUser(targetUserId : string, userId : string){
    if(!isValidObjectId(targetUserId) || !isValidObjectId(userId)) throw new BadRequestException("Invalid id")

     const updatedUser = await this.userModel.findByIdAndUpdate(userId , {
        $addToSet: { following: targetUserId }} , { new: true })   

        return {message : "user successfully followed" , updatedUser}
  }

  async getAllUsers(userId : string){
      if(!isValidObjectId(userId)) throw new BadRequestException("invalid id")

        const users = await this.userModel.find({_id: { $ne: userId } })

      return users
  }

  async  getUser(userId : string){
    if(!isValidObjectId(userId)) throw new BadRequestException("invalid user id")

      const user = await this.userModel.findById(userId)
      if(!user) throw new BadRequestException("user not found")

        return user
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

 async remove(id: string) {
    if(!isValidObjectId(id)) throw new BadRequestException("invalid id")
      const user = await this.userModel.findById(id)
    if (!user) throw new NotFoundException("User not found")
      await this.postModel.deleteMany({authorId : id})
    await this.postModel.updateMany(
      { likes: user._id },
      { $pull: { likes: user._id } }
    );
    await this.userModel.findByIdAndDelete(id)
    

    return `User and his posts successfully deleted`;
  }
}
