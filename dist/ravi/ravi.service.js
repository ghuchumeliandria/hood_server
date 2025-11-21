"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RaviService = void 0;
const common_1 = require("@nestjs/common");
let RaviService = class RaviService {
    create(createRaviDto) {
        return 'This action adds a new ravi';
    }
    findAll() {
        return `This action returns all ravi`;
    }
    findOne(id) {
        return `This action returns a #${id} ravi`;
    }
    update(id, updateRaviDto) {
        return `This action updates a #${id} ravi`;
    }
    remove(id) {
        return `This action removes a #${id} ravi`;
    }
};
exports.RaviService = RaviService;
exports.RaviService = RaviService = __decorate([
    (0, common_1.Injectable)()
], RaviService);
//# sourceMappingURL=ravi.service.js.map