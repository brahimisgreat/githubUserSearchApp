import "./App.css";
import { Group3 } from "./components/Group3";
import { Group1 } from "./components/Group1";
import { Body } from "./components/Body/Body";
import { useState } from "react";

function App() {

  const [data, setData] = useState([]);
  return (
    <div className="app">
      <Group1 />
      <Group3  data={data} setData={setData}/>
      <Body  data={data} />
    </div>
  );
}

export default App;
