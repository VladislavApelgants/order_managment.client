import axios, {AxiosResponse} from "axios";
import {User} from "../types/usersTypes.ts";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL

export const getAllUsers = async (): Promise<AxiosResponse<User[]> | null> => {
    try {
        const response = await axios.get<AxiosResponse<User[]>>(`/users`);
        return response.data
    } catch {
        return null
    }
}