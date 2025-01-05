import { createContext, useState, ReactNode } from "react";
import { TaskType } from "@common/types";

export type TaskContextType = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  updateTask: (task: TaskType) => void;
  deleteTask: (id: string) => void;
};

const initialContext: TaskContextType = {
  tasks: [],
  addTask: () => {},
  updateTask: () => {},
  deleteTask: () => {}
};

export const TaskContext = createContext<TaskContextType>(initialContext);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TaskType[]>(initialContext.tasks);

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

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
