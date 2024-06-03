import "./App.css";
import { Group3 } from "./components/Group3";
import { Group1 } from "./components/Group1";
import { Body } from "./components/Body/Body";
import { useState } from "react";

function App() {

  const [data, setData] = useState([]);
  const [themeToggle, setThemeToggle] = useState(false);
  return (
    <div className="app">
      <Group1 setThemeToggle={setThemeToggle} theme={themeToggle} />
      <Group3 theme={themeToggle} data={data} setData={setData}/>
      <Body  theme={themeToggle} data={data} />
    </div>
  );
}

export default App;
