export interface Auction {
    itemName: string;
    startingPrice: number;
    currentPrice: number;
    bids: {
        bidder: string;
        amount: number;
    }[];
    endTime: Date;
    isActive: boolean;
}
