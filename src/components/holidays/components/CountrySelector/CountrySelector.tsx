import { SelectHTMLAttributes } from "react";
import { CountryType } from "@common/types";
import { Select } from "./CountrySelector.styles";

type Props = SelectHTMLAttributes<HTMLSelectElement> & {
  countries: CountryType[];
};

export const CountrySelector = ({ countries, ...props }: Props) => {
  return (
    <Select {...props}>
      {countries.map((country) => (
        <option key={country.countryCode} value={country.countryCode}>
          {country.name}
        </option>
      ))}
    </Select>
  );
};
