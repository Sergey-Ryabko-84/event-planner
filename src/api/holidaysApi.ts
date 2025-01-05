import { CountryType, HolidayType } from "@common/types";

const apiUrl = "https://date.nager.at/api/v3";

export const fetchHolidays = async (
  year: number,
  countryCode: string = "UA"
): Promise<HolidayType[]> => {
  const response = await fetch(`${apiUrl}/PublicHolidays/${year}/${countryCode}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch holidays: ${response.statusText}`);
  }
  return response.json();
};

export const fetchNextHolidaysWorldwide = async (): Promise<HolidayType[]> => {
  const response = await fetch(`${apiUrl}/NextPublicHolidaysWorldwide`);
  if (!response.ok) {
    throw new Error(`Failed to fetch holidays: ${response.statusText}`);
  }
  return response.json();
};

export const fetchCountries = async (): Promise<CountryType[]> => {
  const response = await fetch(`${apiUrl}/AvailableCountries`);
  if (!response.ok) {
    throw new Error(`Failed to fetch holidays: ${response.statusText}`);
  }
  return response.json();
};
