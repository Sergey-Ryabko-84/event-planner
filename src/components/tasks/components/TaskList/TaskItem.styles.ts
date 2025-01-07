import styled from "@emotion/styled";
import { palette } from "@styles/palette";
import { TaskCategory } from "@common/types";

export const TaskWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 4px;
  padding: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${palette.text.primary};
  background-color: ${palette.background.card};
  border-radius: 4px;

  transition: transform 0.2s;

  :hover {
    transform: scale(1.02);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export const CategoryWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

export const Category = styled.div<{ category: TaskCategory }>`
  width: 24%;
  height: 8px;
  display: flex;
  gap: 4px;
  background-color: ${({ category }) => palette.taskCategories[category]};
  border-radius: 4px;
`;
