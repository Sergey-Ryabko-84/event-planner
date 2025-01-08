import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TaskProvider } from "@common/contexts";
import { Container } from "./Calendar.styles";
import { CalendarGrid, Header, useCalendarDays, useCurrentDate, WeekDays } from "./calendar";
import { HolidaySwitcher, useHolidaySettings } from "./holidays";
import { TaskFilter } from "./tasks";

export const Calendar = () => {
  const { currentDate, goToNextMonth, goToPreviousMonth } = useCurrentDate();
  const { mode, selectedCountry, toggleMode, changeCountry } = useHolidaySettings();
  const days = useCalendarDays(currentDate, mode, selectedCountry);

  return (
    <Container>
      <TaskProvider>
        <Header
          currentDate={currentDate}
          goToNextMonth={goToNextMonth}
          goToPreviousMonth={goToPreviousMonth}
        />
        <TaskFilter />
        <HolidaySwitcher
          mode={mode}
          toggleMode={toggleMode}
          selectedCountry={selectedCountry}
          changeCountry={changeCountry}
        />
        <WeekDays />
        <DndProvider backend={HTML5Backend}>
          <CalendarGrid days={days} />
        </DndProvider>
      </TaskProvider>
    </Container>
  );
};
