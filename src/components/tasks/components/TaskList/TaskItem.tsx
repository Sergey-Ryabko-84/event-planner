import { TaskType } from "@common/types";
import { TaskForm } from "@components/tasks";
import { Category, CategoryWrapper, TaskWrapper } from "./TaskItem.styles";
import { useTaskContext } from "@common/contexts";
import { useDialog } from "@common/hooks";
import { useTaskDragAndDrop } from "@components/tasks";

type Props = {
  task: TaskType;
};

export const TaskItem = ({ task }: Props) => {
  const { isDialogOpen, mousePosition, handleDialogClose, handleDialogOpen } = useDialog();
  const { updateTask, moveTask } = useTaskContext();
  const { ref, isDragging } = useTaskDragAndDrop(task, moveTask, updateTask);

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
