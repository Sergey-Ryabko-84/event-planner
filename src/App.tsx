import { Global } from "@emotion/react";
import { globalStyles } from "./styles";
import { Calendar } from "@components/Calendar";
import { MainWrapper } from "./App.styles";

function App() {
  return (
    <MainWrapper>
      <Global styles={globalStyles} />
      <Calendar />
    </MainWrapper>
  );
}

export default App;
