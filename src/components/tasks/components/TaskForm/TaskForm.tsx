import { useEffect, useRef } from "react";
import { Dayjs } from "dayjs";
import { Button, DialogOverlay } from "@common/ui";
import { MousePositionType } from "@common/hooks";
import { TaskType } from "@common/types";
import { palette } from "@styles/palette";
import { useTaskForm } from "@components/tasks/hooks";
import {
  ButtonWrapper,
  Checkbox,
  CheckboxGroup,
  CheckboxWrapper,
  FormWrapper,
  Input,
  Title
} from "./TaskForm.styles";

type Props = {
  onSubmit: (task: TaskType) => void;
  onClose: () => void;
  position: MousePositionType | null;
  date: Dayjs;
  initialTask?: TaskType;
};

export const TaskForm = ({ onSubmit, onClose, position, date, initialTask }: Props) => {
  const { title, categories, handleTitleChange, handleCategoryToggle, handleSubmit } = useTaskForm(
    onSubmit,
    onClose,
    date,
    initialTask
  );
  const titleInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!initialTask && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [initialTask]);

  return (
    <DialogOverlay onClose={onClose}>
      <FormWrapper onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} position={position}>
        <Title>{initialTask ? "Task Details" : "Add Task"}</Title>
        <Input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={handleTitleChange}
          required
          ref={titleInputRef}
        />

        <CheckboxWrapper>
          <h4>Choose categories:</h4>
          <CheckboxGroup>
            {Object.entries(palette.taskCategories).map(([category, color]) => (
              <label key={category}>
                <Checkbox
                  type="checkbox"
                  onChange={() => handleCategoryToggle(category)}
                  checked={categories.includes(category)}
                  color={color}
                />
                {category}
              </label>
            ))}
          </CheckboxGroup>
        </CheckboxWrapper>

        <ButtonWrapper>
          <Button type="submit">{initialTask ? "Update" : "Add"}</Button>
          <Button type="button" onClick={onClose}>
            Cancel
          </Button>
        </ButtonWrapper>
      </FormWrapper>
    </DialogOverlay>
  );
};
