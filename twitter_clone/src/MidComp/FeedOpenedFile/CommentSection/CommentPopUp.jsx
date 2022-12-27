import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import "./CommentPopUp.css";
import { v4 as uuidv4 } from "uuid";
export default function CommentPopUp({
  commentPopUp,
  setCommentPopUp,
  data,
  setEvent,
  handleSub,
}) {
  const [commentInput, setCommentInput] = useState("");
  const userDetails = useSelector((state) => state.userDetails);
  function textGrow(event) {
    event.target.style.height = "3px";
    event.target.style.height = event.target.scrollHeight + "px";
  }

  function replyComment(e) {
    e.preventDefault();
    const payload = {
      profileId: userDetails.profileId,
      profileImg: userDetails.profileImg,
      profileName: userDetails.profileName,
      description: commentInput,
      id: uuidv4(),
      likesCount: 0,
      commentsCount: 0,
      retweetCount: 0,
      isAlreadyLiked: false,
      subComments: [],
      isSubCommentPresent: false,
      replyedTo: data.profileId,
    };
    setEvent((prev) => {
      return {
        ...prev,
        subComments: [payload, ...prev.subComments],
        isSubCommentPresent: true,
      };
    });
    setCommentInput("");
    setCommentPopUp(!commentPopUp);
  }
  useEffect(() => {
    console.log("data", data);
    if (data.isSubCommentPresent) {
      handleSub("called");
    }
  });
  return (
    <div className="popup">
      <div className="popup-inner">
        <div onClick={(e) => setCommentPopUp(!commentPopUp)}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z"></path>
            </g>
          </svg>
        </div>
        <div>
          <div className="commentPopUp_Container">
            <div className="commentPopUpProfileImg">
              <img src={data.profileImg} alt="profile" />
              <p></p>
            </div>
            <div className="commentPopUpProfileContainer">
              <div className="commentPopUpProfile">
                <p>{data.profileName}</p>
                <p className="profileId">{data.profileId}</p>
              </div>
              <div className="commentPopUpDescription">
                <p>{data.description}</p>
              </div>
              <div className="commentPopUpReplyedTo">
                <p>Replying to </p>
                <h5>{data.profileId}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="commentContainer">
          <div className="commentContainerImg">
            <img src={userDetails.profileImg} alt="pic" />
          </div>
          <form onSubmit={replyComment}>
            <textarea
              id="CommentPopUptextArea"
              onInput={textGrow}
              value={commentInput}
              onChange={(e) => setCommentInput(e.target.value)}
              placeholder="Tweet your reply"
            ></textarea>
            <button type="submit">Reply</button>
          </form>
        </div>
      </div>
    </div>
  );
}
