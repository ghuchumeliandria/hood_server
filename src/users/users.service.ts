import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { isValidObjectId, Model } from 'mongoose';
import { User } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel('User') private userModel : Model<User>,){}

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

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
