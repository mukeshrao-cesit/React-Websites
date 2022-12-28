import React, { useState, useEffect } from "react";
import { FeedOpenedCont } from "./FeedOpenedCont";
import FeedOpenedNav from "./FeedOpenedNav";
import { useLocation } from "react-router-dom";
import axios from "axios";
export const FeedOpenedComp = () => {
  const location = useLocation();
  const [postDetails, setPostDetails] = useState(location.state.postDetails);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const allTweets = await axios
      .get("http://localhost:5000/posts")
      .then((res) => {
        return res.data;
      });
    const data = allTweets.filter((elem) => elem.id === postDetails.id);
    setPostDetails(...data);
  };
  function reRender() {
    apiCall();
  }
  console.log("re-rendered", postDetails);
  return (
    <div>
      <FeedOpenedNav />
      <FeedOpenedCont postDetails={postDetails} reRender={reRender} />
    </div>
  );
};
