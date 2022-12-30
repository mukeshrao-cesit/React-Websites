import React from "react";
import "./FeedOpenedCont.css";
import CommentDisplay from "./CommentSection/CommentDisplay";
import CommentSection from "./CommentSection/CommentSection";
import Tools from "../../Tools";
import axios from "axios";
import { useDispatch } from "react-redux";

export const FeedOpenedCont = ({ postDetails, setPostDetails, reRender }) => {
  const dispatch = useDispatch();
  function handleLikeClick() {
    apiCallLike();
  }

  async function apiCallLike() {
    const res = await axios
      .post("http://localhost:5000/update", postDetails)
      .then((res) => {
        return res.data;
      });
    dispatch({
      type: "UPDATETWEET",
      newComment: res,
      _id: postDetails._id,
    });
    reRender();
  }

  return (
    <div className="phoneOpenFeed">
      <div className="OpenFeed">
        <div>
          <div className="OpenFeedProfileDetails">
            <img src={postDetails.profileImg} alt="pic" />
            <div className="OpenFeedProfileText">
              <h2>{postDetails.profileName}</h2>
              <p>{postDetails.profileId}</p>
            </div>
          </div>
          <div className="OpenFeedDetails">
            <p>{postDetails.description}</p>
            <div className="OpenFeedDetailsImg">
              {postDetails.documents && (
                <img src={postDetails.documents} alt="" />
              )}
            </div>
          </div>
        </div>
        <div className="countContainer">
          <div className="countContainerIndividual">
            <h3>{postDetails.retweetsCount}</h3>
            <p>Retweet</p>
          </div>
          <div className="countContainerIndividual">
            <h3>{postDetails.commentsCount}</h3>
            <p>Comments</p>
          </div>
          <div className="countContainerIndividual">
            <h3>{postDetails.likesCount}</h3>
            <p>Likes</p>
          </div>
        </div>
        <div>
          <Tools
            content={postDetails}
            setContent={setPostDetails}
            handleLikeClick={handleLikeClick}
          />
        </div>
        <div>
          <CommentSection
            reRender={reRender}
            postContent={postDetails}
            setPostContent={setPostDetails}
          />
        </div>
      </div>
      <div>
        <CommentDisplay
          reRender={reRender}
          postContent={postDetails}
          setPostContent={setPostDetails}
        />
      </div>
    </div>
  );
};
