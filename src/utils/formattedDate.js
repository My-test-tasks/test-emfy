import dayjs from "dayjs";

export const formattedDate = (timestamp) => {
  return dayjs.unix(timestamp).format("DD/MM/YYYY HH:mm");
};
