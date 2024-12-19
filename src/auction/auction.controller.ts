// src/auction/auction.controller.ts
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { AuctionService } from './auction.service';

@Controller('auction')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Post('create')
  async createAuction(
    @Body() body: { itemName: string; startingPrice: number; endTime: Date }
  ) {
    return this.auctionService.createAuction(
      body.itemName,
      body.startingPrice,
      body.endTime
    );
  }

  @Get('active')
  async getActiveAuctions() {
    return this.auctionService.getActiveAuctions();
  }

  @Post('bid/:auctionId')
  async placeBid(
    @Param('auctionId') auctionId: string,
    @Body() body: { bidder: string; amount: number }
  ) {
    return this.auctionService.placeBid(auctionId, body.bidder, body.amount);
  }

  @Post('end/:auctionId')
  async endAuction(@Param('auctionId') auctionId: string) {
    return this.auctionService.endAuction(auctionId);
  }
}
