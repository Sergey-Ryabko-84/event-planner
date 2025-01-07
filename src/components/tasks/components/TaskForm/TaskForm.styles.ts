import styled from "@emotion/styled";
import { BaseControl } from "@common/ui";
import { MousePositionType } from "@common/hooks";
import { palette } from "@styles/palette";

export const FormWrapper = styled.form<{ position: MousePositionType | null }>`
  position: absolute;
  top: ${({ position }) => `${position?.y}px`};
  left: ${({ position }) => `${position?.x}px`};
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px;
  background-color: ${palette.background.card};
  border: 1px solid #aaa;
  border-radius: 8px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  button {
    flex: 1;
  }
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Input = BaseControl;

export const CheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const CheckboxGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    color: ${palette.text.primary};
    font-size: 15px;
    cursor: pointer;
  }
`;

export const Checkbox = styled.input`
  appearance: none;
  width: 16px;
  height: 16px;
  border: 2px solid #333;
  border-radius: 4px;
  background-color: ${(props) => `${props.color}4D`};
  cursor: pointer;
  position: relative;

  &:checked {
    background-color: ${(props) => props.color};
  }

  &:checked::after {
    content: "✔";
    color: #333;
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
