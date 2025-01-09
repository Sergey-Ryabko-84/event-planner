import { useState, useEffect } from "react";
import dayjs, { Dayjs } from "dayjs";
import { TaskType } from "@common/types";

export const useTaskManager = () => {
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

  const moveTask = (fromTaskId: string, toTaskId: string) => {
    setTasks((prevTasks) => {
      const fromTask = prevTasks.find((task) => task.id === fromTaskId);
      const toTask = prevTasks.find((task) => task.id === toTaskId);

      if (!fromTask || !toTask || !fromTask.date.isSame(toTask.date, "day")) {
        return prevTasks;
      }

      const sameDayTasks = prevTasks.filter((task) => task.date.isSame(fromTask.date, "day"));

      const sortedTasks = sameDayTasks.sort((a, b) => a.order - b.order);

      const updatedTasks = sortedTasks.map((task) => {
        if (task.id === fromTaskId) {
          return { ...task, order: toTask.order };
        } else if (fromTask.order < toTask.order) {
          if (task.order > fromTask.order && task.order <= toTask.order) {
            return { ...task, order: task.order - 1 };
          }
        } else if (fromTask.order > toTask.order) {
          if (task.order < fromTask.order && task.order >= toTask.order) {
            return { ...task, order: task.order + 1 };
          }
        }
        return task;
      });

      return prevTasks.map((task) => {
        const updatedTask = updatedTasks.find((t) => t.id === task.id);
        return updatedTask ? updatedTask : task;
      });
    });
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    getTasksByDate,
    searchQuery,
    setSearchQuery,
    moveTask
  };
};
