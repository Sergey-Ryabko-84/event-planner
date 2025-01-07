import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { Dayjs } from "dayjs";
import { TaskType } from "@common/types";

export type TaskContextType = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  updateTask: (task: TaskType) => void;
  deleteTask: (id: string) => void;
  getTasksByDate: (date: Dayjs) => TaskType[];
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
};

const initialContext: TaskContextType = {
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {},
  getTasksByDate: () => [],
  searchQuery: "",
  setSearchQuery: () => {}
};

export const TaskContext = createContext<TaskContextType>(initialContext);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>(initialContext.tasks);
  const [searchQuery, setSearchQuery] = useState("");

  const addTask = (task: TaskType) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  const updateTask = (updatedTask: TaskType) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const getTasksByDate = (date: Dayjs) => {
    return tasks.filter(
      (task) =>
        task.date === date &&
        (!searchQuery || task.title.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        getTasksByDate,
        searchQuery,
        setSearchQuery
      }}>
      {children}
    </TaskContext.Provider>
  );
};
