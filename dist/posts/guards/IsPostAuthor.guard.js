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
exports.IsPostAuthor = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
let IsPostAuthor = class IsPostAuthor {
    postModel;
    userModel;
    constructor(postModel, userModel) {
        this.postModel = postModel;
        this.userModel = userModel;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const { id: postId } = req.params;
        if (!(0, mongoose_2.isValidObjectId)(postId) || !(0, mongoose_2.isValidObjectId)(req.userId))
            throw new common_1.BadRequestException("invalid id");
        const post = await this.postModel.findById(postId);
        if (!post)
            throw new common_1.BadRequestException("post not found");
        const user = await this.userModel.findById(req.userId);
        if (!user)
            throw new common_1.BadRequestException("user not found");
        if (post.authorId !== req.userId.toString())
            throw new common_1.BadRequestException("you don't have a permission to delete this post");
        return true;
    }
};
exports.IsPostAuthor = IsPostAuthor;
exports.IsPostAuthor = IsPostAuthor = __decorate([
    __param(0, (0, mongoose_1.InjectModel)("post")),
    __param(1, (0, mongoose_1.InjectModel)("user")),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], IsPostAuthor);
//# sourceMappingURL=IsPostAuthor.guard.js.map