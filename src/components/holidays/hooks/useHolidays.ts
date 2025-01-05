import { useEffect, useState } from "react";
import { Dayjs } from "dayjs";
import { fetchHolidays, fetchNextHolidaysWorldwide } from "@api/holidaysApi";
import { HolidayType } from "@common/types";
import { removeDuplicates } from "../utils";
import { HolidayModeType } from "./useHolidaySettings";

type Return = {
  holidays: Record<string, string[]>;
  loading: boolean;
};

export const useHolidays = (
  currentDate: Dayjs,
  mode: HolidayModeType,
  selectedCountry: string
): Return => {
  const [holidays, setHolidays] = useState<Record<string, string[]>>({});
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAndSetHolidays = async () => {
      setLoading(true);
      try {
        if (mode === "country") {
          const year = currentDate.year();
          const holidaysData = await fetchHolidays(year, selectedCountry);
          const holidaysByDate = holidaysData.reduce(
            (acc: Record<string, string[]>, holiday: HolidayType) => {
              acc[holiday.date] = acc[holiday.date] || [];
              acc[holiday.date].push(holiday.name);
              return acc;
            },
            {}
          );
          setHolidays(holidaysByDate);
        } else if (mode === "worldwide") {
          const holidaysData = await fetchNextHolidaysWorldwide();
          const holidaysByDate = holidaysData.reduce(
            (acc: Record<string, string[]>, holiday: HolidayType) => {
              acc[holiday.date] = acc[holiday.date] || [];
              acc[holiday.date].push(holiday.name);
              acc[holiday.date] = removeDuplicates(acc[holiday.date]);
              return acc;
            },
            {}
          );
          setHolidays(holidaysByDate);
        }
      } catch (error) {
        console.error("Error fetching holidays:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetHolidays();
  }, [currentDate, mode, selectedCountry]);

  return { holidays, loading };
};
