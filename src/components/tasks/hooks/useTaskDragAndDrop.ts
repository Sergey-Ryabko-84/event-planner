import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

export const useTaskDragAndDrop = (
  index: number,
  moveTask: (fromIndex: number, toIndex: number) => void
) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: "TASK",
    drop(item: { index: number }) {
      if (item.index !== index) {
        moveTask(item.index, index);
      }
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: "TASK",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  drag(drop(ref));

  return { ref, isDragging };
};
