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
exports.AuctionGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const auction_service_1 = require("./auction.service");
let AuctionGateway = class AuctionGateway {
    constructor(auctionService) {
        this.auctionService = auctionService;
    }
    async handleBid(data, client) {
        const updatedAuction = await this.auctionService.placeBid(data.auctionId, data.bidder, data.amount);
        if (updatedAuction) {
            client.broadcast.emit('auctionUpdate', updatedAuction);
        }
    }
    handleJoinAuction(auctionId, client) {
    }
};
exports.AuctionGateway = AuctionGateway;
__decorate([
    (0, websockets_1.SubscribeMessage)('placeBid'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, socket_io_1.Socket]),
    __metadata("design:returntype", Promise)
], AuctionGateway.prototype, "handleBid", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('joinAuction'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], AuctionGateway.prototype, "handleJoinAuction", null);
exports.AuctionGateway = AuctionGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(),
    __metadata("design:paramtypes", [auction_service_1.AuctionService])
], AuctionGateway);
//# sourceMappingURL=auction.gateway.js.map