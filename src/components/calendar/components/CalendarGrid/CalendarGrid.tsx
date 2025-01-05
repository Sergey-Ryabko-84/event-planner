import { StyledGrid } from "./CalendarGrid.styles";
import { CalendarCell } from "../CalendarCell";
import { CalendarDayType } from "@components/calendar/hooks";

type Props = {
  days: CalendarDayType[];
};

export const CalendarGrid = ({ days }: Props) => (
  <StyledGrid>
    {days.map((day, index) => (
      <CalendarCell key={index} day={day} />
    ))}
  </StyledGrid>
);
