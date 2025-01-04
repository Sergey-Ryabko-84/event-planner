import styled from "@emotion/styled";
import { palette } from "@styles/palette";

export const StyledCell = styled.div<{ isCurrentMonth: boolean; isToday: boolean }>`
  padding: 10px;
  font-size: 18px;
  font-weight: ${({ isCurrentMonth }) => (isCurrentMonth ? 600 : 400)};
  border-radius: 4px;
  background-color: ${({ isCurrentMonth, isToday }) =>
    isToday
      ? palette.accent.transparent25
      : isCurrentMonth
        ? palette.background.primary
        : palette.background.secondary};
  color: ${({ isCurrentMonth }) =>
    isCurrentMonth ? palette.text.primary : palette.text.secondary};
`;
