import { createContext, useState, ReactNode, Dispatch, SetStateAction, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { TaskType } from "@common/types";

export type TaskContextType = {
  tasks: TaskType[];
  addTask: (task: TaskType) => void;
  updateTask: (task: TaskType) => void;
  deleteTask: (id: string) => void;
  getTasksByDate: (date: Dayjs) => TaskType[];
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
  moveTask: (fromIndex: number, toIndex: number) => void;
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
  const savedTasks = localStorage.getItem("tasks");
  const parsedTasks = savedTasks
    ? JSON.parse(savedTasks).map((task: TaskType) => ({
        ...task,
        date: dayjs(task.date)
      }))
    : [];

  const [tasks, setTasks] = useState<TaskType[]>(parsedTasks);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

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

  const matchesSearchQuery = (title: string, query: string) =>
    title.toLowerCase().includes(query.toLowerCase());

  const getTasksByDate = (date: Dayjs) => {
    const filtered = tasks.filter(
      (task) =>
        dayjs(task.date).isSame(date, "day") &&
        (!searchQuery || matchesSearchQuery(task.title, searchQuery))
    );

    return filtered.sort((a, b) => a.order - b.order);
  };

  const moveTask = (fromIndex: number, toIndex: number) => {
    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);
    const reorderedTasks = updatedTasks.map((task, index) => ({
      ...task,
      order: index + 1
    }));

    setTasks(reorderedTasks);
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
        setSearchQuery,
        moveTask
      }}>
      {children}
    </TaskContext.Provider>
  );
};
