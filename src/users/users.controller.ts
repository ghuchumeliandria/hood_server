import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IsAuthGuard } from 'src/auth/guards/IsAuth.Guard';
import { UserId } from 'src/decorators/userId';
import { OwnershipGuard } from './guards/Ownership.guard';


@Controller('users')
@UseGuards(IsAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Patch("follow")
  followUser(@Body('targetUserId') targetUserId : string , @UserId() userId : string ){
    return this.usersService.followUser(targetUserId , userId)
  }
  @Get("all-users")
  getAllUsers(@UserId() userId : string){
    return this.usersService.getAllUsers(userId)
  }
  @Get("profile")
  getUser(@UserId() userId : string) {
    return this.usersService.getUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
