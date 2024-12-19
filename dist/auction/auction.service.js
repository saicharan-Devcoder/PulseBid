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
exports.AuctionService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let AuctionService = class AuctionService {
    constructor(auctionModel) {
        this.auctionModel = auctionModel;
    }
    async createAuction(itemName, startingPrice, endTime) {
        const auction = new this.auctionModel({ itemName, startingPrice, endTime });
        return auction.save();
    }
    async getActiveAuctions() {
        return this.auctionModel.find({ isActive: true }).exec();
    }
    async placeBid(auctionId, bidder, amount) {
        const auction = await this.auctionModel.findById(auctionId).exec();
        if (auction && amount > auction.currentPrice) {
            auction.bids.push({ bidder, amount });
            auction.currentPrice = amount;
            await auction.save();
            return auction;
        }
        return null;
    }
    async endAuction(auctionId) {
        const auction = await this.auctionModel.findById(auctionId).exec();
        if (auction) {
            auction.isActive = false;
            await auction.save();
            return auction;
        }
        return null;
    }
};
exports.AuctionService = AuctionService;
exports.AuctionService = AuctionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Auction')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], AuctionService);
//# sourceMappingURL=auction.service.js.map