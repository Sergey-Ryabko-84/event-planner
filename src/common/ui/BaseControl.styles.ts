import styled from "@emotion/styled";
import { palette } from "@styles/palette";

export const BaseControl = styled.input`
  background-color: ${palette.background.primary};
  border: 1px solid #ccc;
  font-size: 16px;
  color: ${palette.text.primary};
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    color: ${palette.accent.main};
  }

  &:focus {
    color: ${palette.accent.main};
  }
`;
