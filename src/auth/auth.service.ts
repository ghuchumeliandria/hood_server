import { BadRequestException, Body, Injectable } from '@nestjs/common';
import { SignUpDto,  } from './dto/signup.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcryptjs';

import { Model } from 'mongoose';
import { User } from 'src/users/schema/user.schema';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel('user') private userModel : Model<User>,
  private jwtService : JwtService){}

  async signUp({fullname , email , password , confirmPassword }: SignUpDto) {
    if(!fullname || !email || !password  || !confirmPassword) throw new BadRequestException("fields are required")

      const exisUser = await this.userModel.findOne({email})

      if(exisUser) throw new BadRequestException("email  already used")

        if(confirmPassword !== password) throw new BadRequestException("confirm password is incorrect")
          const hashedPass = await bcrypt.hash(password , 10)

        const newUser = await this.userModel.create({
          fullname,
          email,
          password : hashedPass
        })

        return {message : 'user Created Successfully' , data : {
          fullname,
          email,
          id : newUser._id
        }}
  }

  async signIn({email , password} : SignInDto){
    if(!email || !password) throw new BadRequestException("fields are required")

      const existUser = await this.userModel.findOne({email}).select("+password")

      if(!existUser) throw new BadRequestException("invalid credentials")

      const isPassEqual = await bcrypt.compare(password , existUser.password)

      if(!isPassEqual) throw new BadRequestException("invalid credentials")

        const payload = {id : existUser._id }

        const token =  this.jwtService.sign(payload , {expiresIn : '2h'})

        return {token}
      
  }
  
}
