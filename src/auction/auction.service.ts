// src/auction/auction.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Auction } from './auction.interface';

@Injectable()
export class AuctionService {
  constructor(
    @InjectModel('Auction') private readonly auctionModel: Model<Auction>
  ) {}

  async createAuction(itemName: string, startingPrice: number, endTime: Date) {
    const auction = new this.auctionModel({ itemName, startingPrice, endTime });
    return auction.save();
  }

  async getActiveAuctions() {
    return this.auctionModel.find({ isActive: true }).exec();
  }

  async placeBid(auctionId: string, bidder: string, amount: number) {
    const auction = await this.auctionModel.findById(auctionId).exec();
    if (auction && amount > auction.currentPrice) {
      auction.bids.push({ bidder, amount });
      auction.currentPrice = amount;
      await auction.save();
      return auction;
    }
    return null;
  }

  async endAuction(auctionId: string) {
    const auction = await this.auctionModel.findById(auctionId).exec();
    if (auction) {
      auction.isActive = false;
      await auction.save();
      return auction;
    }
    return null;
  }
}
