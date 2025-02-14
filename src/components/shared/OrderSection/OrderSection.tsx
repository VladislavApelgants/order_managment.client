import React, {FC, useState} from "react";
import {OrderForm} from "../Form/Form.tsx";
import {OrdersTable} from "../OrdersTable/OrdersTable.tsx";
import {createOrder} from "../../../api/orders.ts";
import {toast, ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import s from './orderSection.module.css'
import {Typography} from "../../ui/Typography/Typography.tsx";

export const OrderSection: FC = (): React.JSX.Element => {
    const [isSubmit, setIsSubmit] = useState<boolean>(false)

    const onSubmit = async (data: { userId: string; productId: string; quantity: number }): Promise<void> => {
        try {
            await createOrder(data);
            toast.success("Order successfully created!")
            setIsSubmit((prev) => !prev);

        } catch (error){
            toast.error((error as { message?: string })?.message || "Send order filed");
        }
    };

    return <section className={s.section}>
        <div className="container">
            <Typography variant="h1" className={s.title}>Order Management</Typography>
            <OrderForm onSubmit={onSubmit}/>
            <OrdersTable isSubmit={isSubmit}/>
            <ToastContainer/>
        </div>
    </section>
}