import { ChangeEvent } from "react";
import { Button } from "@common/ui";
import { HolidayModeType, useCountries } from "@components/holidays/hooks";
import { CountrySelector } from "../CountrySelector";
import { Container } from "./HolidaySwitcher.styles";

type Props = {
  mode: HolidayModeType;
  selectedCountry: string;
  toggleMode: () => void;
  changeCountry: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const HolidaySwitcher = ({ mode, selectedCountry, toggleMode, changeCountry }: Props) => {
  const { countries, loading } = useCountries();

  return (
    <Container>
      {mode === "country" && !loading && (
        <CountrySelector countries={countries} value={selectedCountry} onChange={changeCountry} />
      )}
      <Button onClick={toggleMode}>
        {`${mode === "country" ? "Worldwide" : "Country"} Holidays`}
      </Button>
    </Container>
  );
};
