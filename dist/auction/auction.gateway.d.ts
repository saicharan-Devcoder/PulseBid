import { Socket } from 'socket.io';
import { AuctionService } from './auction.service';
export declare class AuctionGateway {
    private readonly auctionService;
    constructor(auctionService: AuctionService);
    handleBid(data: {
        auctionId: string;
        bidder: string;
        amount: number;
    }, client: Socket): Promise<void>;
    handleJoinAuction(auctionId: string, client: Socket): void;
}
