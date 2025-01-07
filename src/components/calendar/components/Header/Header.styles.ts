import styled from "@emotion/styled";
import { palette } from "@styles/palette";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;

  h4 {
    font-size: 18px;
    color: ${palette.text.calendarTitle};
  }

  button {
    transform: scaleY(150%);
  }
`;
