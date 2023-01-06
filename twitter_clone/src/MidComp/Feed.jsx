import React from "react";
import Tools from "../Tools";
import "./Feed.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import CommentPopUp from "./FeedOpenedFile/CommentSection/CommentPopUp";

export const Feed = ({ feed }) => {
  const [content, setContent] = useState(feed);
  const [commentPopUp, setCommentPopUp] = useState(false);

  const navigate = useNavigate();
  var isLikeClicked = false;
  var feedCommentClicked = false;
  var profileClicked = false;
  var commentPopUpClicked = false;

  const dispatch = useDispatch();
  function handleLikeClick() {
    isLikeClicked = true;
    apiCall();
  }

  async function apiCall() {
    const res = await axios
      .post("http://localhost:5000/update", content)
      .then((res) => {
        return res.data;
      });
    dispatch({
      type: "UPDATETWEET",
      newComment: res,
      _id: content._id,
    });
  }

  function handleClick() {
    console.log("nav");
    if (
      !isLikeClicked &&
      !feedCommentClicked &&
      !profileClicked &&
      !commentPopUpClicked
    ) {
      navigate("/openedTweet", { state: { postDetails: content } });
    } else if (profileClicked) {
      navigate("/Profile", { state: { postDetails: content } });
    }
    isLikeClicked = false;
    feedCommentClicked = false;
    profileClicked = false;
    commentPopUpClicked = false;
  }

  function handleProfileComp() {
    profileClicked = true;
  }

  function handleComment() {
    commentPopUpClicked = true;
    console.log(content);
  }

  return (
    <div className="feed-list-wrapper">
      <li className="feedList" onClick={handleClick}>
        <img
          className="feedProfileImg"
          src={content.profileImg}
          alt="docu"
          onClick={handleProfileComp}
        />
        <div className="feedContainer">
          <div className="feedProfileDetails">
            <h3>{content.profileName}</h3>
            <p>{content.profileId}</p>
          </div>
          <p>{content.description}</p>
          {content.documents && <img src={content.documents} alt="doc" />}
          <Tools
            content={content}
            commentPopUp={commentPopUp}
            setCommentPopUp={setCommentPopUp}
            handleComment={handleComment}
            setContent={setContent}
            handleLikeClick={handleLikeClick}
          />
        </div>
      </li>

      {commentPopUp && (
        <CommentPopUp
          setEvent={setContent}
          data={content}
          setCommentPopUp={setCommentPopUp}
          commentPopUp={commentPopUp}
        />
      )}
    </div>
  );
};
