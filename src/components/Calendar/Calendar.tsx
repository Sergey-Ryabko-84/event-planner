import { CalendarGrid, Header, WeekDays } from "./components";
import { useCalendarState } from "./hooks";
import { Container } from "./Calendar.styles";

export const Calendar = () => {
  const { currentDate, goToNextMonth, goToPreviousMonth } = useCalendarState();

  return (
    <Container>
      <Header
        currentDate={currentDate}
        goToNextMonth={goToNextMonth}
        goToPreviousMonth={goToPreviousMonth}
      />
      <WeekDays />
      <CalendarGrid currentDate={currentDate} />
    </Container>
  );
};
