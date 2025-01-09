import { useState, ChangeEvent, FormEvent } from "react";
import { useTaskContext } from "@common/contexts";
import { TaskCategory, TaskType } from "@common/types";
import { Dayjs } from "dayjs";
import { getNextOrder } from "../utils";

type Return = {
  title: string;
  categories: TaskCategory[];
  handleTitleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleCategoryToggle: (category: TaskCategory) => void;
  handleSubmit: (e: FormEvent) => void;
  handleDelete: () => void;
};

export const useTaskForm = (
  onSubmit: (task: TaskType) => void,
  onClose: () => void,
  date: Dayjs,
  initialTask?: TaskType
): Return => {
  const { tasks, deleteTask } = useTaskContext();
  const [title, setTitle] = useState(initialTask?.title || "");
  const [categories, setCategories] = useState<TaskCategory[]>(initialTask?.categories || []);

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleCategoryToggle = (category: TaskCategory) => {
    setCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    const newTask: TaskType = {
      id: initialTask?.id || String(Date.now()),
      order: initialTask?.order || getNextOrder(tasks),
      title,
      categories,
      date
    };
    onSubmit(newTask);
    onClose();
  };

  const handleDelete = () => {
    if (!initialTask) return;
    deleteTask(initialTask.id);
    onClose();
  };

  return {
    title,
    categories,
    handleTitleChange,
    handleCategoryToggle,
    handleSubmit,
    handleDelete
  };
};
