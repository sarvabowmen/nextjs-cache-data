// import { useTime } from "../provider";
import ClientComponent from "@/component/clientComponent";
import { WithData } from "../../component/hoc";
const About = ({ data }) => {
  return (
    <div>
      <h1>About</h1>
      {JSON.stringify(data.datetime)}
      <ClientComponent></ClientComponent>
    </div>
  );
};

export default await WithData(About);