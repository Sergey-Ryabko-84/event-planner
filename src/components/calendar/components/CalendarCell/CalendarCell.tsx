import { useTaskContext } from "@common/contexts";
import { useDialog } from "@common/hooks";
import { HolidayList } from "@components/holidays";
import { TaskForm, TaskList } from "@components/tasks";
import { CalendarDayType, useCalendarCellDragAndDrop } from "../../hooks";
import { CellTitle } from "./CellTitle";
import { StyledCell } from "./CalendarCell.styles";

type Props = {
  day: CalendarDayType;
};

export const CalendarCell = ({ day }: Props) => {
  const { date, isCurrentMonth, isToday, monthDay, holidays } = day;
  const { isDialogOpen, mousePosition, handleDialogClose, handleDialogOpen } = useDialog();
  const { addTask, getTasksByDate } = useTaskContext();

  const tasks = getTasksByDate(date);

  const { dropRef } = useCalendarCellDragAndDrop(date);

  return (
    <>
      <StyledCell
        ref={dropRef}
        isCurrentMonth={isCurrentMonth}
        isToday={isToday}
        onClick={handleDialogOpen}
        isEditable={isDialogOpen}>
        <CellTitle monthDay={monthDay} tasksCount={tasks.length} />
        {holidays.length > 0 && <HolidayList holidays={holidays} />}
        {tasks.length > 0 && <TaskList tasks={tasks} />}
      </StyledCell>

      {isDialogOpen && mousePosition && (
        <TaskForm
          onSubmit={addTask}
          onClose={handleDialogClose}
          date={date}
          position={mousePosition}
        />
      )}
    </>
  );
};
