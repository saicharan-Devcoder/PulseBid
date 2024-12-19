// src/auction/auction.gateway.ts
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { AuctionService } from './auction.service';

@WebSocketGateway()
export class AuctionGateway {
  constructor(private readonly auctionService: AuctionService) {}

  @SubscribeMessage('placeBid')
  async handleBid(
    @MessageBody() data: { auctionId: string; bidder: string; amount: number },
    @ConnectedSocket() client: Socket
  ) {
    const updatedAuction = await this.auctionService.placeBid(
      data.auctionId,
      data.bidder,
      data.amount
    );
    if (updatedAuction) {
      client.broadcast.emit('auctionUpdate', updatedAuction);
    }
  }

  @SubscribeMessage('joinAuction')
  handleJoinAuction(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @MessageBody() auctionId: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    @ConnectedSocket() client: Socket
  ) {
    // Logic for when a user joins an auction (optional)
  }
}
