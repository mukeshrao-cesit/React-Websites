import React from "react";
import { FeedOpenedCont } from "./FeedOpenedCont";
import FeedOpenedNav from "./FeedOpenedNav";
import { useLocation } from "react-router-dom";
export const FeedOpenedComp = () => {
  const location = useLocation();
  return (
    <div>
      <FeedOpenedNav />
      <FeedOpenedCont profileDetails={location.state.profileDetails} />
    </div>
  );
};
