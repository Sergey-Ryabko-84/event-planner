import { Dayjs } from "dayjs";
import { Button } from "@common/ui";
import { Container } from "./Header.styles";

type Props = {
  currentDate: Dayjs;
  goToNextMonth: () => void;
  goToPreviousMonth: () => void;
};

export const Header = ({ currentDate, goToNextMonth, goToPreviousMonth }: Props) => {
  return (
    <Container>
      <Button onClick={goToPreviousMonth}>{"<"}</Button>
      <h4>{currentDate.format("MMMM YYYY")}</h4>
      <Button onClick={goToNextMonth}>{">"}</Button>
    </Container>
  );
};
