import { AuctionService } from './auction.service';
export declare class AuctionController {
    private readonly auctionService;
    constructor(auctionService: AuctionService);
    createAuction(body: {
        itemName: string;
        startingPrice: number;
        endTime: Date;
    }): Promise<import("mongoose").Document<unknown, {}, import("./auction.interface").Auction> & import("./auction.interface").Auction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getActiveAuctions(): Promise<(import("mongoose").Document<unknown, {}, import("./auction.interface").Auction> & import("./auction.interface").Auction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    placeBid(auctionId: string, body: {
        bidder: string;
        amount: number;
    }): Promise<import("mongoose").Document<unknown, {}, import("./auction.interface").Auction> & import("./auction.interface").Auction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    endAuction(auctionId: string): Promise<import("mongoose").Document<unknown, {}, import("./auction.interface").Auction> & import("./auction.interface").Auction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
