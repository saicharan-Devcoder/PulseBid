import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionModule } from './auction/auction.module';
import { AuctionController } from './auction/auction.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AuctionService } from './auction/auction.service';

@Module({
  imports: [AuctionModule, MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [AuctionController, AppController],
  providers: [AuctionService, AppService],
})
export class AppModule {}
