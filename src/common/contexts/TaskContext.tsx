import { createContext, ReactNode, Dispatch, SetStateAction } from "react";
import { Dayjs } from "dayjs";
import { TaskType } from "@common/types";
import { useTaskManager } from "./hooks";

export type TaskContextType = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  updateTask: (task: TaskType) => void;
  deleteTask: (id: string) => void;
  getTasksByDate: (date: Dayjs) => TaskType[];
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  moveTask: (fromTaskId: string, toTaskId: string) => void;
};

const initialContext: TaskContextType = {
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
  getTasksByDate: () => [],
  searchQuery: "",
  setSearchQuery: () => {},
  moveTask: () => {}
};

export const TaskContext = createContext<TaskContextType>(initialContext);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    getTasksByDate,
    searchQuery,
    setSearchQuery,
    moveTask
  } = useTaskManager();

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        getTasksByDate,
        searchQuery,
        setSearchQuery,
        moveTask
      }}>
      {children}
    </TaskContext.Provider>
  );
};
