import "./App.css";
import { GraphChartBar } from "./components/GraphChartBar";
import { useState } from "react";
import CHART_DATA from "./data/APIdata";

function App() {
  const [showGraph, setShowGraph] = useState(false);
  const toggleButton = () => {
    setShowGraph(!showGraph);
    console.log("Clickedd");
  };
  return (
    <div className="App">
      <p>Graph Chart Application.</p>
      <button onClick={toggleButton}>Toggle</button>
      {showGraph ? <GraphChartBar data={CHART_DATA} /> : null}
    </div>
  );
}

export default App;
