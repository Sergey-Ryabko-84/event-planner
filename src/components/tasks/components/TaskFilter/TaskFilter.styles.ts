import styled from "@emotion/styled";
import { BaseControl } from "@common/ui";
import { palette } from "@styles/palette";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 12%;
  display: flex;
  align-items: center;
  gap: 18px;
  padding: 14px;
`;

export const Input = BaseControl;

export const ClearButton = styled.button`
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
  color: ${palette.text.secondary};
  font-size: 18px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: ${palette.accent.main};
  }
`;
