import styled from "@emotion/styled";
import { BaseControl } from "./BaseControl.styles";

export const Button = styled(BaseControl.withComponent("button"))`
  border: none;
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:active {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  }
`;
