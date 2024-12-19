import { Schema } from 'mongoose';
export declare const AuctionSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    itemName: string;
    startingPrice: number;
    currentPrice: number;
    bids: import("mongoose").Types.DocumentArray<{
        bidder?: string;
        amount?: number;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        bidder?: string;
        amount?: number;
    }> & {
        bidder?: string;
        amount?: number;
    }>;
    endTime: NativeDate;
    isActive: boolean;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    itemName: string;
    startingPrice: number;
    currentPrice: number;
    bids: import("mongoose").Types.DocumentArray<{
        bidder?: string;
        amount?: number;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        bidder?: string;
        amount?: number;
    }> & {
        bidder?: string;
        amount?: number;
    }>;
    endTime: NativeDate;
    isActive: boolean;
}>> & import("mongoose").FlatRecord<{
    itemName: string;
    startingPrice: number;
    currentPrice: number;
    bids: import("mongoose").Types.DocumentArray<{
        bidder?: string;
        amount?: number;
    }, import("mongoose").Types.Subdocument<import("mongoose").Types.ObjectId, any, {
        bidder?: string;
        amount?: number;
    }> & {
        bidder?: string;
        amount?: number;
    }>;
    endTime: NativeDate;
    isActive: boolean;
}> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
