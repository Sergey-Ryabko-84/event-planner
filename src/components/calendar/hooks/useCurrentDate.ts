import { useState } from "react";
import dayjs from "dayjs";

type Return = {
  currentDate: dayjs.Dayjs;
  goToNextMonth: () => void;
  goToPreviousMonth: () => void;
};

export const useCurrentDate = (): Return => {
  const [currentDate, setCurrentDate] = useState(dayjs());

  const goToNextMonth = () => {
    setCurrentDate((prev) => prev.add(1, "month"));
  };

  const goToPreviousMonth = () => {
    setCurrentDate((prev) => prev.subtract(1, "month"));
  };

  return { currentDate, goToNextMonth, goToPreviousMonth };
};
