import { Group5 } from "./Group5";
import "./Body.css";
import { Group7 } from "./Group7";
import { Group9 } from "./Group9";
import { Group11 } from "./Group11";

export const Body = ({ data }) => {
  return (
    <div className="body">
      <Group5 data={data} />
      <Group7 data={data} />
      <Group9 data={data} />
      <Group11 data={data} />
    </div>
  );
};
