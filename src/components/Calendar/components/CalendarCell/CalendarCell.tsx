import { StyledCell } from "./CalendarCell.styles";
import { CalendarDayType } from "../../hooks";

type Props = {
  day: CalendarDayType;
};

export const CalendarCell = ({ day }: Props) => {
  const { isCurrentMonth, isToday, displayValue } = day;

  return (
    <StyledCell isCurrentMonth={isCurrentMonth} isToday={isToday}>
      {displayValue}
    </StyledCell>
  );
};
