"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let UsersService = class UsersService {
    userModel;
    postModel;
    constructor(userModel, postModel) {
        this.userModel = userModel;
        this.postModel = postModel;
    }
    create(createUserDto) {
        return 'This action adds a new user';
    }
    async followUser(targetUserId, userId) {
        if (!(0, mongoose_1.isValidObjectId)(targetUserId) || !(0, mongoose_1.isValidObjectId)(userId))
            throw new common_1.BadRequestException("Invalid id");
        const updatedUser = await this.userModel.findByIdAndUpdate(userId, {
            $addToSet: { following: targetUserId }
        }, { new: true });
        return { message: "user successfully followed", updatedUser };
    }
    async getAllUsers(userId) {
        if (!(0, mongoose_1.isValidObjectId)(userId))
            throw new common_1.BadRequestException("invalid id");
        const users = await this.userModel.find({ _id: { $ne: userId } });
        return users;
    }
    async getUser(userId) {
        if (!(0, mongoose_1.isValidObjectId)(userId))
            throw new common_1.BadRequestException("invalid user id");
        const user = await this.userModel.findById(userId);
        if (!user)
            throw new common_1.BadRequestException("user not found");
        return user;
    }
    findAll() {
        return `This action returns all users`;
    }
    findOne(id) {
        return `This action returns a #${id} user`;
    }
    update(id, updateUserDto) {
        return `This action updates a #${id} user`;
    }
    async remove(id) {
        if (!(0, mongoose_1.isValidObjectId)(id))
            throw new common_1.BadRequestException("invalid id");
        const user = await this.userModel.findById(id);
        if (!user)
            throw new common_1.NotFoundException("User not found");
        await this.postModel.deleteMany({ authorId: id });
        await this.postModel.updateMany({ likes: user._id }, { $pull: { likes: user._id } });
        await this.userModel.findByIdAndDelete(id);
        return `User and his posts successfully deleted`;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('User')),
    __param(1, (0, mongoose_2.InjectModel)('post')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map