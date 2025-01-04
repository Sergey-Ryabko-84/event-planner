import { Dayjs } from "dayjs";
import { StyledGrid } from "./CalendarGrid.styles";
import { CalendarCell } from "../CalendarCell";
import { useCalendarDays } from "../../hooks";

type Props = {
  currentDate: Dayjs;
};

export const CalendarGrid = ({ currentDate }: Props) => {
  const days = useCalendarDays(currentDate);

  return (
    <StyledGrid>
      {days.map((day, index) => (
        <CalendarCell key={index} day={day} />
      ))}
    </StyledGrid>
  );
};
