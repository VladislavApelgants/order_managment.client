import React, { FC, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createOrder } from "../../../api/orders.ts";
import { Typography } from "../../ui/Typography/Typography.tsx";
import { OrderForm } from "../Form/Form.tsx";
import { OrdersTable } from "../OrdersTable/OrdersTable.tsx";
import s from './orderSection.module.css';
import {ServiceList} from "../ServiceList/ServiceList.tsx";

export const OrderSection: FC = (): React.JSX.Element => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false)
    const [userId, setUserId] = useState<string>('')
    const [productId, setProduct] = useState<string>('')

    const onSubmit = async (data: { userId: string; productId: string; quantity: number }): Promise<void> => {
        try {
            await createOrder(data);
            toast.success("Order successfully created!")
            setIsSubmit((prev):boolean => !prev);
        } catch (error){
            toast.error((error as { message?: string })?.message || "Send order filed");
        }
    };

    return <section className={s.section}>
        <div className="container">
            <Typography variant="h1" className={s.title}>Order Management</Typography>
            <OrderForm onSubmit={onSubmit} userId={userId} productId={productId}/>
            <Typography variant="p" className={s.test}>For test application</Typography>
            <div className={s.service_container}>
                <ServiceList setId={setUserId} flagData="user"/>
                <ServiceList setId={setProduct} flagData="product"/>
            </div>
            <OrdersTable isSubmit={isSubmit} userId={userId}/>
            <ToastContainer/>
        </div>
    </section>
}