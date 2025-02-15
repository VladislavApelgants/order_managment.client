import axios, {AxiosResponse} from "axios";
import {Product} from "../types/productsTypes.ts";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const getAllProducts = async (): Promise<AxiosResponse<Product[]> | null> => {
    try {
        const response = await axios.get<AxiosResponse<Product[]>>(`/products`);
        return response.data
    } catch {
        return null
    }
}