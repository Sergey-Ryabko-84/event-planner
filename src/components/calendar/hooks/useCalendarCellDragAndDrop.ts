import { DragElementWrapper, useDrop } from "react-dnd";
import { Dayjs } from "dayjs";
import { TaskType } from "@common/types";
import { useTaskContext } from "@common/contexts";
import { getNextOrder } from "@components/tasks";

type Return = {
  dropRef: DragElementWrapper<unknown>;
};

export const useCalendarCellDragAndDrop = (date: Dayjs): Return => {
  const { updateTask, getTasksByDate } = useTaskContext();

  const tasks = getTasksByDate(date);

  const [, dropRef] = useDrop({
    accept: "TASK",
    drop(item: { task: TaskType }) {
      if (!item.task.date.isSame(date, "day")) {
        const updatedTask = { ...item.task, date, order: getNextOrder(tasks) };
        updateTask(updatedTask);
      }
    }
  });

  return { dropRef };
};
