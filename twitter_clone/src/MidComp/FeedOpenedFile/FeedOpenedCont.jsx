import React, { useState } from "react";
import "./FeedOpenedCont.css";
import CommentDisplay from "./CommentSection/CommentDisplay";
import CommentSection from "./CommentSection/CommentSection";
import Tools from "../../Tools";

export const FeedOpenedCont = ({ postDetails, reRender }) => {
  const [postContent, setPostContent] = useState(postDetails);

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
            reRender={reRender}
            postContent={postContent}
            setPostContent={setPostContent}
          />
        </div>
      </div>
      <div>
        <CommentDisplay
          reRender={reRender}
          postContent={postContent}
          setPostContent={setPostContent}
        />
      </div>
    </div>
  );
};
