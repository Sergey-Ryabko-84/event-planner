import { useTaskContext } from "@common/contexts";
import { useDialog } from "@common/hooks";
import { TaskType } from "@common/types";
import { TaskForm, useTaskDragAndDrop } from "@components/tasks";
import { Category, CategoryWrapper, TaskWrapper } from "./TaskItem.styles";

type Props = {
  task: TaskType;
  index: number;
};

export const TaskItem = ({ task, index }: Props) => {
  const { isDialogOpen, mousePosition, handleDialogClose, handleDialogOpen } = useDialog();
  const { updateTask, moveTask } = useTaskContext();
  const { ref, isDragging } = useTaskDragAndDrop(index, moveTask);

  return (
    <>
      <TaskWrapper onClick={handleDialogOpen} ref={ref} isDragging={isDragging}>
        <CategoryWrapper>
          {task.categories.map((category) => (
            <Category key={category} category={category} />
          ))}
        </CategoryWrapper>
        <span>{task.title}</span>
      </TaskWrapper>

      {isDialogOpen && mousePosition && (
        <TaskForm
          onSubmit={updateTask}
          onClose={handleDialogClose}
          date={task.date}
          initialTask={task}
          position={mousePosition}
        />
      )}
    </>
  );
};
