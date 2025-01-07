import React from "react";
import { HolidayLabel } from "./HolidayList.styles";

type Props = {
  holidays: string[];
};

export const HolidayList = ({ holidays }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => e.stopPropagation();

  return (
    <>
      {holidays.map((holiday, index) => (
        <HolidayLabel key={index} onClick={handleClick}>
          {holiday}
        </HolidayLabel>
      ))}
    </>
  );
};
