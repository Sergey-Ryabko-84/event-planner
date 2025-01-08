import { useTaskSearch } from "@components/tasks/hooks";
import { ClearButton, Container, Input } from "./TaskFilter.styles";

export const TaskFilter = () => {
  const { inputValue, handleSearchChange, handleClearSearch } = useTaskSearch();

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search tasks..."
        value={inputValue}
        onChange={handleSearchChange}
      />
      {inputValue && <ClearButton onClick={handleClearSearch}>&times;</ClearButton>}
    </Container>
  );
};
