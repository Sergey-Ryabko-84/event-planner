import { Global } from "@emotion/react";
import { globalStyles } from "./styles";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <Global styles={globalStyles} />
      <h1>Event Planner</h1>
    </div>
  );
}

export default App;
