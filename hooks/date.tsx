import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatDate = (date: string | Date): string => {
  return dayjs(date).tz("Asia/Tokyo").format("YYYY年MM月DD日");
};
