import * as React from "react";
import { FC, useEffect, useState } from "react";
import { getOrdersByUserId } from "../../../api/orders.ts";
import { Order } from "../../../types/orderTypes.ts";
import { dateFormatter } from "../../../utils/dateFormatter.ts";
import { Typography } from "../../ui/Typography/Typography.tsx";
import s from './orderTable.module.css';

type OrdersTableTypes = {
    isSubmit: boolean
}

export const OrdersTable: FC<OrdersTableTypes> = ({isSubmit}): React.JSX.Element | null => {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async ():Promise<void> => {
            const response = await getOrdersByUserId("67af229f0811e4570842537c");
            if (response && response?.data) {
                setOrders(response.data);
            }else {
                setOrders([])
            }
            setLoading(false);
        })();
    }, [isSubmit]);


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