// import { useTime } from "../provider";
import ClientComponent from "@/component/clientComponent";
import { WithData } from "../../component/hoc";
const MyPage = ({ data }) => {
  return (
    <div>
      <h1>Home Page</h1>
      {JSON.stringify(data.datetime)}
      <ClientComponent></ClientComponent>
    </div>
  );
};

export default await WithData(MyPage);