import { ChangeEvent, useState } from "react";

export type HolidayModeType = "country" | "worldwide";

type Return = {
  mode: HolidayModeType;
  selectedCountry: string;
  toggleMode: () => void;
  changeCountry: (e: ChangeEvent<HTMLSelectElement>) => void;
};

export const useHolidaySettings = (): Return => {
  const [mode, setMode] = useState<HolidayModeType>("country");
  const [selectedCountry, setSelectedCountry] = useState<string>("UA");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "country" ? "worldwide" : "country"));
  };

  const changeCountry = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(e.target.value);
  };

  return { mode, selectedCountry, toggleMode, changeCountry };
};
