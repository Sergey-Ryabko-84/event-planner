import { Container } from "./Calendar.styles";
import { CalendarGrid, Header, useCalendarDays, useCurrentDate, WeekDays } from "./calendar";
import { HolidaySwitcher, useHolidaySettings } from "./holidays";
import { TaskProvider } from "./tasks";

export const Calendar = () => {
  const { currentDate, goToNextMonth, goToPreviousMonth } = useCurrentDate();
  const { mode, selectedCountry, toggleMode, changeCountry } = useHolidaySettings();
  const days = useCalendarDays(currentDate, mode, selectedCountry);

  return (
    <Container>
      <Header
        currentDate={currentDate}
        goToNextMonth={goToNextMonth}
        goToPreviousMonth={goToPreviousMonth}
      />
      <HolidaySwitcher
        mode={mode}
        toggleMode={toggleMode}
        selectedCountry={selectedCountry}
        changeCountry={changeCountry}
      />
      <WeekDays />
      <TaskProvider>
        <CalendarGrid days={days} />
      </TaskProvider>
    </Container>
  );
};
