import { useSelector } from "react-redux";
import { Feed } from "./Feed";
const Feeds = () => {
  const datas = useSelector((state) => state.tweets);
  return (
    <div className="Tweets">
      <ul>
        {datas.map((data) => (
          <Feed feed={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
};

export default Feeds;
