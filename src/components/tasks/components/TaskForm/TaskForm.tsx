import { useEffect, useRef } from "react";
import { Dayjs } from "dayjs";
import { DialogOverlay } from "@common/ui";
import { useTaskContext } from "@common/contexts";
import { MousePositionType } from "@common/hooks";
import { TaskCategory, TaskType } from "@common/types";
import { palette } from "@styles/palette";
import { useTaskForm } from "@components/tasks/hooks";
import {
  ButtonWrapper,
  CancelButton,
  Checkbox,
  CheckboxGroup,
  CheckboxWrapper,
  DeleteButton,
  FormWrapper,
  Input,
  SuccessButton,
  Title,
  TitleWrapper
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
  const { deleteTask } = useTaskContext();

  useEffect(() => {
    if (!initialTask && titleInputRef.current) {
      titleInputRef.current.focus();
    }
  }, [initialTask]);

  return (
    <DialogOverlay onClose={onClose}>
      <FormWrapper onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit} position={position}>
        <TitleWrapper>
          <Title>{initialTask ? "Task Details" : "Add Task"}</Title>
          {initialTask && (
            <DeleteButton type="button" onClick={() => deleteTask(initialTask.id)}>
              Delete
            </DeleteButton>
          )}
        </TitleWrapper>
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
                  onChange={() => handleCategoryToggle(category as TaskCategory)}
                  checked={categories.includes(category as TaskCategory)}
                  color={color}
                />
                {category}
              </label>
            ))}
          </CheckboxGroup>
        </CheckboxWrapper>
        <ButtonWrapper>
          <SuccessButton type="submit">{initialTask ? "Change" : "Add"}</SuccessButton>
          <CancelButton type="button" onClick={onClose}>
            Cancel
          </CancelButton>
        </ButtonWrapper>
      </FormWrapper>
    </DialogOverlay>
  );
};
