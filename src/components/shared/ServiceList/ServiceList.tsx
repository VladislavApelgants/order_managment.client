import React, {FC, useEffect, useState} from "react";
import s from "./serviceList.module.css"
import {Button} from "../Button/Button.tsx";
import {Typography} from "../../ui/Typography/Typography.tsx";
import {getAllProducts} from "../../../api/products.ts";
import {Product} from "../../../types/productsTypes.ts";
import {User} from "../../../types/usersTypes.ts";
import {getAllUsers} from "../../../api/users.ts";

type UserListTypes = {
    setId: (value: string) => void;
    flagData: "user" | "product"
}

export const ServiceList: FC<UserListTypes> = ({setId, flagData}): React.JSX.Element | null => {
    const [storage, setStorage] = useState<User[] | Product[]>([]);

    useEffect(() => {
        (async () => {
                let data;
                if (flagData === "user") {
                    data = await getAllUsers();
                } else {
                    data = await getAllProducts();
                }
                setStorage(data?.data || []);
        })();
    }, [flagData]);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const liElement = event.currentTarget.closest('li');
        const value = liElement?.dataset.value || "";
        setId(value);
    }

    if (!storage.length) return null;

    return <div className={s.service_container}>
        <Typography variant='h3' className={s.service_title}>{`Choose an ${flagData}`}</Typography>
        <ul className={s.service_list}>
            {storage && storage.map((item: User | Product) => <li key={item._id} data-value={item._id}>
                <Button handler={handleClick}>{item.name}</Button>
            </li>)}
        </ul>
    </div>
}