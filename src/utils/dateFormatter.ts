import { format } from "date-fns";
import { uk } from "date-fns/locale";
export const dateFormatter = (date:string) => {
    return format(new Date(date), "dd.MM.yyyy HH:mm", { locale: uk })
}