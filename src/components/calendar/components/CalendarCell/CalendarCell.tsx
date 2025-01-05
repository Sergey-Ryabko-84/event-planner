import { StyledCell } from "./CalendarCell.styles";
import { HolidayList } from "@components/holidays";
import { CalendarDayType } from "../../hooks";

type Props = {
  day: CalendarDayType;
};

export const CalendarCell = ({ day }: Props) => {
  const { isCurrentMonth, isToday, displayValue, holidays } = day;

  return (
    <StyledCell isCurrentMonth={isCurrentMonth} isToday={isToday}>
      <span>{displayValue}</span>
      {holidays.length > 0 && <HolidayList holidays={holidays} />}
    </StyledCell>
  );
};
