import dayjs from "dayjs";

export const groupCallsByDate = (data) =>
  data.reduce((acc, call) => {
    const date = dayjs(call.created_at).format("YYYY-MM-DD");
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(call);
    return acc;
  }, {});
