import { Dayjs } from "dayjs";
import { palette } from "@styles/palette";

export type HolidayType = {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
};

export type CountryType = {
  countryCode: string;
  name: string;
};

export type TaskType = {
  id: string;
  order: number;
  title: string;
  categories: TaskCategory[];
  date: Dayjs;
};

export type TaskCategory = keyof typeof palette.taskCategories;
