import axios, {AxiosError, AxiosResponse} from "axios";
import {Order} from "../types/orderTypes.ts";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const getOrdersByUserId = async (userId: string): Promise<AxiosResponse<Order[]> | null> => {
    try {
        const response = await axios.get<AxiosResponse<Order[]>>(`/orders/${userId}`);
        return response.data
    } catch {
        return null
    }
}

export const createOrder = async (data: { userId: string; productId: string; quantity: number }): Promise<void> => {
    try {
        await axios.post(`/orders`, data);
    } catch (error) {
        if (error instanceof AxiosError) {
            throw new Error(error?.response?.data?.data?.message);
        } else {
            throw new Error("Неизвестная ошибка");
        }
    }
};
