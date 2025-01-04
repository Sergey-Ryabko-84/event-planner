import styled from "@emotion/styled";
import { palette } from "@styles/palette";

export const StyledWeekDaysContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  background-color: transparent;
  padding: 8px 0;
`;

export const StyledWeekDay = styled.div`
  text-align: center;
  font-weight: bold;
  padding: 8px;
  color: ${palette.text.secondary};
`;
