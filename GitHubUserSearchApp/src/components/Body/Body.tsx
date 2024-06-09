import { Group5 } from "./Group5";
import "./Body.css";
import { Group7 } from "./Group7";
import { Group9 } from "./Group9";
import { Group11 } from "./Group11";



export const Body = ({ theme, data }) => {
  return (
    <div className={theme? "bodyLight" : "body"}>
      <Group5 data={data}  theme={theme}/>
      <Group7 data={data}  theme={theme} />
      <Group9 data={data}  theme={theme} />
      <Group11 data={data}  theme={theme} />
    </div>
  );
};
