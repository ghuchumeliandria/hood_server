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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let PostsService = class PostsService {
    userModel;
    postModel;
    constructor(userModel, postModel) {
        this.userModel = userModel;
        this.postModel = postModel;
    }
    getPosts() {
        return this.postModel.find();
    }
    async createPost({ title, imageUrl }, userId) {
        if (!(0, mongoose_2.isValidObjectId)(userId))
            throw new common_1.BadRequestException("user not found ");
        const newPost = await this.postModel.create({
            title, imageUrl,
            authorId: userId
        });
        const populatedPost = await newPost.populate('authorId', 'fullname avatar');
        return { message: "post created successfully", populatedPost };
    }
    async getFeedPosts(userId) {
        if (!(0, mongoose_2.isValidObjectId)(userId))
            throw new common_1.BadRequestException("Invalid id");
        const user = await this.userModel.findById(userId).select("following");
        if (!user)
            throw new common_1.BadRequestException("User not found");
        const followingIds = user.following.map(id => id.toString());
        const feedIds = [userId, ...followingIds];
        const posts = await this.postModel
            .find({ authorId: { $in: feedIds } })
            .sort({ createdAt: -1 }).populate('authorId', 'fullname avatar').lean();
        return posts.map(post => ({
            ...post,
            isLiked: post.likes.some((likeId) => likeId.toString() === userId),
            likesCount: post.likes.length,
        }));
    }
    async deletePost(postId) {
        if (!(0, mongoose_2.isValidObjectId)(postId))
            throw new common_1.BadRequestException("Invalid id");
        const post = await this.postModel.findByIdAndDelete(postId);
        return { message: 'post deleted successfully', post };
    }
    async postLike(postId, userId) {
        if (!(0, mongoose_2.isValidObjectId)(postId) || !(0, mongoose_2.isValidObjectId)(userId))
            throw new common_1.BadRequestException("invalid id");
        const post = await this.postModel.findById(postId);
        if (!post)
            throw new common_1.NotFoundException('post not found');
        const isLiked = post.likes.includes(userId);
        if (isLiked) {
            await this.postModel.findByIdAndUpdate(postId, {
                $pull: { likes: userId }
            });
        }
        else {
            await this.postModel.findByIdAndUpdate(postId, {
                $addToSet: { likes: userId }
            });
        }
        return { liked: !isLiked };
    }
};
exports.PostsService = PostsService;
exports.PostsService = PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('user')),
    __param(1, (0, mongoose_1.InjectModel)('post')),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PostsService);
//# sourceMappingURL=posts.service.js.map