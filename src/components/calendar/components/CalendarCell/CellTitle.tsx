import { TasksCount, TitleWrapper } from "./CellTitle.styles";

type Props = {
  monthDay: string;
  tasksCount: number;
};

export const CellTitle = ({ monthDay, tasksCount }: Props) => {
  return (
    <TitleWrapper>
      <span>{monthDay}</span>
      {tasksCount > 0 && (
        <TasksCount>{`${tasksCount} ${tasksCount > 1 ? "tasks" : "task"}`}</TasksCount>
      )}
    </TitleWrapper>
  );
};
