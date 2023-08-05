import { months } from "./constant";

export const formatMessageCount = (count: number) => {
    return count === 1 ? "1 message" : `${count} messages`;
};

export const formatMessageDate = (dateStr: Date) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = months[date.getMonth()];
    return `${day} ${month}`;
};
