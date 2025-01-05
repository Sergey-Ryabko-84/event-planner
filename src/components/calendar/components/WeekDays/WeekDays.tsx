import { daysOfWeek } from "@common/constants";
import { StyledWeekDaysContainer, StyledWeekDay } from "./WeekDays.styles";

export const WeekDays = () => {
  return (
    <StyledWeekDaysContainer>
      {daysOfWeek.map((day) => (
        <StyledWeekDay key={day}>{day}</StyledWeekDay>
      ))}
    </StyledWeekDaysContainer>
  );
};
