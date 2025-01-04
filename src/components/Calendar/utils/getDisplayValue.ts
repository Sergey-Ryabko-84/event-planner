import dayjs from "dayjs";

export const getDisplayValue = (date: dayjs.Dayjs, isFirst: boolean, isLast: boolean): string => {
  if (isFirst || isLast) {
    return `${date.format("MMM")} ${date.date()}`;
  }
  return `${date.date()}`;
};
