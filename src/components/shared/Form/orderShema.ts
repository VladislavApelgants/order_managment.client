import * as Yup from "yup";

export const OrderSchema = Yup.object().shape({
    userId: Yup.string().min(24, "Must be 24 symbols!").required("Select a user"),
    productId: Yup.string().min(24, "Must be 24 symbols!").required("Select product"),
    quantity: Yup.number()
        .min(1, "Min count — 1")
        .required("Input value"),
});