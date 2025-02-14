import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { FC } from "react";
import { Typography } from "../../ui/Typography/Typography.tsx";
import { Button } from "../Button/Button.tsx";
import s from "./form.module.css";
import { OrderSchema } from "./orderShema.ts";


type OrderFormTypes = {
    onSubmit: (values: { userId: string; productId: string; quantity: number }) => void;
}

export const OrderForm: FC<OrderFormTypes> = ({onSubmit}): React.JSX.Element => {

    return (
        <div className={s.formContainer}>
            <Typography variant="h2" className={s.formTitle}>Create order</Typography>
            <Formik
                initialValues={{userId: "", productId: "", quantity: 1}}
                validationSchema={OrderSchema}
                onSubmit={(values, {resetForm, setSubmitting}) => {
                    setSubmitting(true)
                    onSubmit(values);
                    resetForm();
                    setSubmitting(false)
                }}
            >
                {({isSubmitting}) => (
                    <Form className={s.form}>
                        <div className={s.formGroup}>
                            <label className={s.formLabel} htmlFor="userId">
                                ID user
                            </label>
                            <Field type="text" name="userId" className={s.formInput}/>
                            <ErrorMessage name="userId" component="div" className={s.errorMessage}/>
                        </div>

                        <div className={s.formGroup}>
                            <label className={s.formLabel} htmlFor="productId">
                                ID product
                            </label>
                            <Field type="text" name="productId" className={s.formInput}/>
                            <ErrorMessage name="productId" component="div" className={s.errorMessage}/>
                        </div>

                        <div className={s.formGroup}>
                            <label className={s.formLabel} htmlFor="quantity">
                                Quantity
                            </label>
                            <Field type="number" name="quantity" className={s.formInput}/>
                            <ErrorMessage name="quantity" component="div" className={s.errorMessage}/>
                        </div>
                        <Button type="submit" className={s.submitButton} disabled={isSubmitting}>
                            {isSubmitting ? "Processing..." : "Place order"}
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

