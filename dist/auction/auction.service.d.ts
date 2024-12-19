import { Model } from 'mongoose';
import { Auction } from './auction.interface';
export declare class AuctionService {
    private readonly auctionModel;
    constructor(auctionModel: Model<Auction>);
    createAuction(itemName: string, startingPrice: number, endTime: Date): Promise<import("mongoose").Document<unknown, {}, Auction> & Auction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getActiveAuctions(): Promise<(import("mongoose").Document<unknown, {}, Auction> & Auction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    })[]>;
    placeBid(auctionId: string, bidder: string, amount: number): Promise<import("mongoose").Document<unknown, {}, Auction> & Auction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    endAuction(auctionId: string): Promise<import("mongoose").Document<unknown, {}, Auction> & Auction & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
