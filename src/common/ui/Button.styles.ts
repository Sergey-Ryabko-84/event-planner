import styled from "@emotion/styled";
import { palette } from "@styles/palette";

export const Button = styled.button`
  background-color: ${palette.background.primary};
  border: none;
  font-size: 16px;
  cursor: pointer;
  color: ${palette.text.secondary};
  padding: 8px 16px;
  border-radius: 4px;

  &:hover {
    color: ${palette.accent.main};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;
