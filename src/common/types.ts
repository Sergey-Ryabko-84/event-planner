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
  categories: string[];
  date: string;
};
