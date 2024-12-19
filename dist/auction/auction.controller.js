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
exports.AuctionController = void 0;
const common_1 = require("@nestjs/common");
const auction_service_1 = require("./auction.service");
let AuctionController = class AuctionController {
    constructor(auctionService) {
        this.auctionService = auctionService;
    }
    async createAuction(body) {
        return this.auctionService.createAuction(body.itemName, body.startingPrice, body.endTime);
    }
    async getActiveAuctions() {
        return this.auctionService.getActiveAuctions();
    }
    async placeBid(auctionId, body) {
        return this.auctionService.placeBid(auctionId, body.bidder, body.amount);
    }
    async endAuction(auctionId) {
        return this.auctionService.endAuction(auctionId);
    }
};
exports.AuctionController = AuctionController;
__decorate([
    (0, common_1.Post)('create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "createAuction", null);
__decorate([
    (0, common_1.Get)('active'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "getActiveAuctions", null);
__decorate([
    (0, common_1.Post)('bid/:auctionId'),
    __param(0, (0, common_1.Param)('auctionId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "placeBid", null);
__decorate([
    (0, common_1.Post)('end/:auctionId'),
    __param(0, (0, common_1.Param)('auctionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuctionController.prototype, "endAuction", null);
exports.AuctionController = AuctionController = __decorate([
    (0, common_1.Controller)('auction'),
    __metadata("design:paramtypes", [auction_service_1.AuctionService])
], AuctionController);
//# sourceMappingURL=auction.controller.js.map