import React from "react";
import Tools from "../Tools";
import "./Feed.css";
import { useNavigate } from "react-router-dom";

export const Feed = ({ feed }) => {
  const navigate = useNavigate();
  var isLikeClicked = false;
  var feedCommentClicked = false;
  var profileClicked = false;

  function handleLikeClick() {
    isLikeClicked = true;
  }

  function handleClick() {
    if (!isLikeClicked && !feedCommentClicked && !profileClicked) {
      navigate("/openedTweet", { state: { postDetails: feed } });
    } else if (profileClicked) {
      navigate("/Profile", { state: { postDetails: feed } });
    }
    isLikeClicked = false;
    feedCommentClicked = false;
    profileClicked = false;
  }

  function handleProfileComp() {
    profileClicked = true;
  }

  return (
    <div className="feed-list-wrapper">
      <li className="feedList" onClick={handleClick}>
        <img
          className="feedProfileImg"
          src={feed.profileImg}
          alt="docu"
          onClick={handleProfileComp}
        />
        <div className="feedContainer">
          <div className="feedProfileDetails">
            <h3>{feed.profileName}</h3>
            <p>{feed.profileId}</p>
          </div>
          <p>{feed.description}</p>
          {feed.documents.length > 0 && <img src={feed.documents} alt="doc" />}
          <Tools content={feed} handleLikeClick={handleLikeClick} />
        </div>
      </li>
      {/* <div className="phoneView" onClick={handleClick}>
        <div className="feedDetails">
          <img className="feedProfileImg" src={feed.profileImg} alt="docu" />
          <div className="feedContainer">
            <div className="feedProfileDetails">
              <h3>{feed.profileName}</h3>
              <p>{feed.profileId}</p>
            </div>
          </div>
        </div>
        <div className="feedPhone">
          <p>{feed.description}</p>
          {feed.documents.length > 0 && <img src={feed.documents} alt="doc" />}
          <Tools content={feed} />
        </div>
      </div> */}
      {/* {isFeedCommentClicked ? (
        <FeedCommentPopUp
          feedCommentClickResponse={feedCommentClickResponse}
          commentUpdate={commentUpdate}
          data={feed}
        ></FeedCommentPopUp>
      ) : null} */}
    </div>
  );
};
