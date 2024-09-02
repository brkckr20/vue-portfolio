import { useNotification } from "@kyvg/vue3-notification";
const { notify } = useNotification();

export const success = (type, text) => {
    notify({
        type: text,
        title: "Bilgi",
        text: `${text} işlemi başarılı bir şekilde gerçekleştirildi!`,
    });
}