import styled from "@emotion/styled";
import { palette } from "@styles/palette";

export const TitleWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: baseline;
`;

export const TasksCount = styled.span`
  font-size: 14px;
  color: ${palette.text.secondary};
`;
