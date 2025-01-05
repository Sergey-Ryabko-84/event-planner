import { HolidayLabel } from "./HolidayList.styles";

type Props = {
  holidays: string[];
};

export const HolidayList = ({ holidays }: Props) => {
  return (
    <>
      {holidays.map((holiday, index) => (
        <HolidayLabel key={index}>{holiday}</HolidayLabel>
      ))}
    </>
  );
};
