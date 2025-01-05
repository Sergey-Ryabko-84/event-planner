import { Global } from "@emotion/react";
import { globalStyles } from "@styles/globalStyles";
import { Calendar } from "@components";
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
