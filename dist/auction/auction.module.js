"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const auction_service_1 = require("./auction.service");
const auction_controller_1 = require("./auction.controller");
const auction_schema_1 = require("./auction.schema");
const auction_gateway_1 = require("./auction.gateway");
let AuctionModule = class AuctionModule {
};
exports.AuctionModule = AuctionModule;
exports.AuctionModule = AuctionModule = __decorate([
    (0, common_1.Module)({
        providers: [auction_service_1.AuctionService, auction_gateway_1.AuctionGateway],
        controllers: [auction_controller_1.AuctionController],
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'Auction', schema: auction_schema_1.AuctionSchema }]),
        ],
    })
], AuctionModule);
//# sourceMappingURL=auction.module.js.map