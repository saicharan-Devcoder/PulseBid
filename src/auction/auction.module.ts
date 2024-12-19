import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuctionService } from './auction.service';
import { AuctionController } from './auction.controller';
import { AuctionSchema } from './auction.schema';
import { AuctionGateway } from './auction.gateway';

@Module({
  providers: [AuctionService, AuctionGateway],
  controllers: [AuctionController],
  imports: [
    MongooseModule.forFeature([{ name: 'Auction', schema: AuctionSchema }]),
  ],
})
export class AuctionModule {}
