import Feeds from "./Feeds";
import { NavBar } from "./NavBar/NavBar";
import TweetPost from "./TweetPost";
const MidComp = () => {
  return (
    <div className="Tweet-body" id="tweetMainContainer">
      <NavBar />
      <TweetPost />
      <Feeds />
    </div>
  );
};

export default MidComp;
