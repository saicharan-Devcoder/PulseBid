// src/auction/auction.schema.ts
import { Schema } from 'mongoose';

export const AuctionSchema = new Schema({
  itemName: { type: String, required: true },
  startingPrice: { type: Number, required: true },
  currentPrice: { type: Number, default: 0 },
  bids: [{ bidder: String, amount: Number }],
  endTime: { type: Date, required: true },
  isActive: { type: Boolean, default: true },
});
