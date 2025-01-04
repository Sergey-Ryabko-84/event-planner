import { css } from "@emotion/react";
import { palette } from "./palette";

export const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: ${palette.background.page};
    color: #333;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
