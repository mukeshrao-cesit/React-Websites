import React, { useState, useEffect } from "react";
import "./FeedOpenedCont.css";
import axios from "axios";
// import CommentDisplay from "./CommentDisplay";
import CommentSection from "./CommentSection/CommentSection";
import Tools from "../../Tools";
import { useDispatch } from "react-redux";
export const FeedOpenedCont = ({ profileDetails }) => {
  const [postContent, setPostContent] = useState(profileDetails);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.patch("http://localhost:5000/comment").then((req, res) => {
      console.log("activated");
      dispatch({ type: "ADDEDCOMMENT", newComment: res });
    });
  }, [postContent, dispatch]);
  function handleNewComment(data) {
    // setPostContent((prev) => {
    //   return { ...prev, comments: [data, ...prev.comments] };
    // });
  }
  return (
    <div className="phoneOpenFeed">
      <div className="OpenFeed">
        <div>
          <div className="OpenFeedProfileDetails">
            <img src={postContent.profileImg} alt="pic" />
            <div className="OpenFeedProfileText">
              <h2>{postContent.profileName}</h2>
              <p>{postContent.profileId}</p>
            </div>
          </div>
          <div className="OpenFeedDetails">
            <p>{postContent.description}</p>
            <div className="OpenFeedDetailsImg">
              {postContent.documents && (
                <img src={postContent.documents} alt="" />
              )}
            </div>
          </div>
        </div>
        <div className="countContainer">
          <div className="countContainerIndividual">
            <h3>{postContent.retweetsCount}</h3>
            <p>Retweet</p>
          </div>
          <div className="countContainerIndividual">
            <h3>{postContent.commentsCount}</h3>
            <p>Comments</p>
          </div>
          <div className="countContainerIndividual">
            <h3>{postContent.likesCount}</h3>
            <p>Likes</p>
          </div>
        </div>
        <div>
          <Tools content={postContent} />
        </div>
        <div>
          <CommentSection handleNewComment={handleNewComment} />
        </div>
      </div>
      <div>{/* <CommentDisplay postContent={postContent} /> */}</div>
    </div>
  );
};
