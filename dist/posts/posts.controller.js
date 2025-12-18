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
exports.PostsController = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const IsAuth_Guard_1 = require("../auth/guards/IsAuth.Guard");
const create_post_dto_1 = require("./dto/create-post.dto");
const userId_1 = require("../decorators/userId");
const IsPostAuthor_guard_1 = require("./guards/IsPostAuthor.guard");
let PostsController = class PostsController {
    postsService;
    constructor(postsService) {
        this.postsService = postsService;
    }
    getPosts() {
        return this.postsService.getPosts();
    }
    getFeedPosts(userId) {
        return this.postsService.getFeedPosts(userId);
    }
    createUser(createPostDto, userId) {
        return this.postsService.createPost(createPostDto, userId);
    }
    postLike(postId, userId) {
        return this.postsService.postLike(postId, userId);
    }
    deletePost(postId) {
        return this.postsService.deletePost(postId);
    }
};
exports.PostsController = PostsController;
__decorate([
    (0, common_1.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getPosts", null);
__decorate([
    (0, common_1.Get)('feed'),
    __param(0, (0, userId_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "getFeedPosts", null);
__decorate([
    (0, common_1.Post)('create-post'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, userId_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_post_dto_1.CreatePostDto, String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('post-like/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, userId_1.UserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "postLike", null);
__decorate([
    (0, common_1.UseGuards)(IsPostAuthor_guard_1.IsPostAuthor),
    (0, common_1.Delete)("delete-post/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PostsController.prototype, "deletePost", null);
exports.PostsController = PostsController = __decorate([
    (0, common_1.UseGuards)(IsAuth_Guard_1.IsAuthGuard),
    (0, common_1.Controller)('posts'),
    __metadata("design:paramtypes", [posts_service_1.PostsService])
], PostsController);
//# sourceMappingURL=posts.controller.js.map