import { useMemo } from "react";
import dayjs from "dayjs";
import { getDisplayValue } from "../utils/getDisplayValue";

export type CalendarDayType = {
  date: dayjs.Dayjs;
  isCurrentMonth: boolean;
  isToday: boolean;
  displayValue: string;
};

export const useCalendarDays = (currentDate: dayjs.Dayjs): CalendarDayType[] => {
  return useMemo(() => {
    const startOfMonth = currentDate.startOf("month");
    const endOfMonth = currentDate.endOf("month");
    const daysInMonth = currentDate.daysInMonth();

    const startDayOfWeek = startOfMonth.day();
    const prevMonthDays = Array.from({ length: startDayOfWeek }, (_, i) => {
      const date = startOfMonth.subtract(startDayOfWeek - i, "day");
      const isFirst = false;
      const isLast = i === startDayOfWeek - 1;
      return {
        date,
        isCurrentMonth: false,
        isToday: false,
        displayValue: getDisplayValue(date, isFirst, isLast)
      };
    });

    const currentMonthDays = Array.from({ length: daysInMonth }, (_, i) => {
      const date = startOfMonth.add(i, "day");
      const isFirst = i === 0;
      const isLast = i === daysInMonth - 1;
      return {
        date,
        isCurrentMonth: true,
        isToday: date.isSame(dayjs(), "day"),
        displayValue: getDisplayValue(date, isFirst, isLast)
      };
    });

    const remainingDays = 7 - ((prevMonthDays.length + currentMonthDays.length) % 7 || 7);
    const nextMonthDays = Array.from({ length: remainingDays }, (_, i) => {
      const date = endOfMonth.add(i + 1, "day");
      const isFirst = i === 0;
      const isLast = false;
      return {
        date,
        isCurrentMonth: false,
        isToday: false,
        displayValue: getDisplayValue(date, isFirst, isLast)
      };
    });

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays];
  }, [currentDate]);
};
