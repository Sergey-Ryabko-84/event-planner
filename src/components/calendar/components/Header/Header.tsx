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
      <span>{currentDate.format("MMMM YYYY")}</span>
      <Button onClick={goToNextMonth}>{">"}</Button>
    </Container>
  );
};
