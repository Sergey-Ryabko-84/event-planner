import { RefObject, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { TaskType } from "@common/types";

type DragItem = {
  task: TaskType;
};

type Return = {
  ref: RefObject<HTMLDivElement>;
  isDragging: boolean;
};

export const useTaskDragAndDrop = (
  task: TaskType,
  moveTask: (fromTaskId: string, toTaskId: string) => void,
  updateTask: (updatedTask: TaskType) => void
): Return => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "TASK",
    drop: (item: DragItem) => {
      if (item.task.id !== task.id && item.task.date.isSame(task.date, "day")) {
        moveTask(item.task.id, task.id);
      } else if (item.task.id !== task.id && !item.task.date.isSame(task.date, "day")) {
        const updatedTask = { ...item.task, date: task.date };
        updateTask(updatedTask);
      }
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { task },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  return { ref, isDragging };
};
