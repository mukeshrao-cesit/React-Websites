import React, { useState } from "react";
import "./FeedOpenedCont.css";
import CommentDisplay from "./CommentSection/CommentDisplay";
import CommentSection from "./CommentSection/CommentSection";
import Tools from "../../Tools";
import axios from "axios";
import { useDispatch } from "react-redux";

export const FeedOpenedCont = ({ postDetails }) => {
  const [postContent, setPostContent] = useState(postDetails);
  const dispatch = useDispatch();

  async function handleComment(payload, id) {
    try {
      const res = await axios.patch("http://localhost:5000/comment", {
        _id: id,
        newComments: payload,
      });
      dispatch({
        type: "UPDATETWEET",
        newComment: res.data,
        _id: postContent._id,
      });
    } catch (error) {
      console.log(error);
    }
    setPostContent({
      ...postContent,
      comments: [payload, ...postContent.comments],
      commentsCount: (postContent.commentsCount += 1),
    });
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
          <CommentSection
            handleComment={handleComment}
            postContent={postContent}
          />
        </div>
      </div>
      <div>
        <CommentDisplay postContent={postContent} />
      </div>
    </div>
  );
};
