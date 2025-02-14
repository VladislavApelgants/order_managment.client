export interface Order {
    _id: string;
    orderId: string;
    userId: string;
    productId: string;
    totalPrice: number;
    quantity: number;
    createdAt: string;
}