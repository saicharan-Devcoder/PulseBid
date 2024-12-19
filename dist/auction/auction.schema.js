"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuctionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.AuctionSchema = new mongoose_1.Schema({
    itemName: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    currentPrice: { type: Number, default: 0 },
    bids: [{ bidder: String, amount: Number }],
    endTime: { type: Date, required: true },
    isActive: { type: Boolean, default: true },
});
//# sourceMappingURL=auction.schema.js.map