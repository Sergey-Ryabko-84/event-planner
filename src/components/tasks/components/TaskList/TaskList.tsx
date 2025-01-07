import { TaskType } from "@common/types";
import { TaskItem } from "./TaskItem";

type Props = {
  tasks: TaskType[];
};

export const TaskList = ({ tasks }: Props) => {
  return (
    <>
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} />
      ))}
    </>
  );
};
