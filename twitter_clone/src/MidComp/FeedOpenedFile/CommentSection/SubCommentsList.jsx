import React, { useState, useEffect } from "react";
import Tools from "../../../Tools";
import { SubCommentsDisplay } from "./SubCommentsDisplay";
import "./CommentList.css";
import CommentPopUp from "./CommentPopUp";
export default function SubCommentsList({ postContent, handleEvent }) {
  const [commentPopUp, setCommentPopUp] = useState(false);
  const [event, setEvent] = useState(postContent);
  useEffect(() => {
    if (event.isSubCommentPresent) {
      setEvent((prev) => {
        return { ...prev, isSubCommentPresent: false };
      });
      handleEvent(event);
    }
  }, [event, handleEvent]);
  // console.log("subCommentslist", postContent);
  return (
    <div className="commentListContainer">
      <li>
        <div className="commentListMainContainer">
          <div className="commentListProfileImg">
            <img src={event.profileImg} alt="pic" />
            {event.subComments.length > 0 ? <p id="ThreadDisplay"></p> : null}
          </div>
          <div>
            <div className="commentListProfile">
              <h4>{event.profileName}</h4>
              <p>{event.profileId}</p>
            </div>
            <div className="commentReplyedTo">
              <p>Replying to </p>
              <h5>{event.replyedTo}</h5>
            </div>
            <div className="commentListDescription">
              <p>{event.description}</p>
            </div>
          </div>
        </div>
        <div className="commentPhoneView">
          <Tools
            content={event}
            setCommentPopUp={setCommentPopUp}
            commentPopUp={commentPopUp}
          />
        </div>
      </li>
      {commentPopUp && (
        <CommentPopUp
          data={event}
          setEvent={setEvent}
          setCommentPopUp={setCommentPopUp}
          commentPopUp={commentPopUp}
        />
      )}
      {event.subComments.length > 0 && (
        <SubCommentsDisplay postContent={event} setEvent={setEvent} />
      )}
    </div>
  );
}
