import * as React from "react";
import { FC, useEffect, useState } from "react";
import { getOrdersByUserId } from "../../../api/orders.ts";
import { Order } from "../../../types/orderTypes.ts";
import { dateFormatter } from "../../../utils/dateFormatter.ts";
import { Typography } from "../../ui/Typography/Typography.tsx";
import s from './orderTable.module.css';
import {toast} from "react-toastify";

type OrdersTableTypes = {
    isSubmit: boolean;
    userId: string
}

export const OrdersTable: FC<OrdersTableTypes> = ({isSubmit,userId}): React.JSX.Element | null => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async ():Promise<void> => {
            try{
                const response = userId && await getOrdersByUserId(userId);
                if (response && response?.data) {
                    setOrders(response.data);
                }else {
                    setOrders([])
                }
            }catch(error) {
                if ((error as { message?: string })?.message) {
                    toast((error as { message?: string })?.message);
                }
            }

            setLoading(false);
        })();
    }, [isSubmit, userId]);


    if (loading) return <Typography variant="p" className={s.loader}>Загрузка...</Typography>;
    if (!orders.length) return null;

    return <div className={`${s.tableWrapper}`}>
        <table className={s.table}>
            <thead>
            <tr>
                <th>Order ID</th>
                <th>User ID</th>
                <th>Product ID</th>
                <th>Total Price</th>
                <th>Quantity</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            {orders.map((order) => (
                <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.userId}</td>
                    <td>{order.productId}</td>
                    <td>{order.totalPrice} $</td>
                    <td>{order.quantity}</td>
                    <td>{dateFormatter(order.createdAt)}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}