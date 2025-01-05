import styled from "@emotion/styled";
import { palette } from "@styles/palette";

export const Select = styled.select`
  background-color: ${palette.background.primary};
  border: 1px solid #ccc;
  font-size: 16px;
  cursor: pointer;
  color: ${palette.text.primary};
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    color: ${palette.accent.main};
  }
`;
