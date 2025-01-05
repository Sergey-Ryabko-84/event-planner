import { useEffect, useState } from "react";
import { CountryType } from "@common/types";
import { fetchCountries } from "@api/holidaysApi";

type Return = {
  countries: CountryType[];
  loading: boolean;
};

export const useCountries = (): Return => {
  const [countries, setCountries] = useState<CountryType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAndSetCountries = async () => {
      setLoading(true);
      try {
        const countriesData = await fetchCountries();
        setCountries(countriesData);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAndSetCountries();
  }, []);

  return { countries, loading };
};
