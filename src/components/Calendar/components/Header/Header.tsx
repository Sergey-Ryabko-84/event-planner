import { Dayjs } from "dayjs";
import { Container } from "./Header.styles";

type Props = {
  currentDate: Dayjs;
  goToNextMonth: () => void;
  goToPreviousMonth: () => void;
};

export const Header = ({ currentDate, goToNextMonth, goToPreviousMonth }: Props) => {
  return (
    <Container>
      <button onClick={goToPreviousMonth}>{"<"}</button>
      <span>{currentDate.format("MMMM YYYY")}</span>
      <button onClick={goToNextMonth}>{">"}</button>
    </Container>
  );
};
