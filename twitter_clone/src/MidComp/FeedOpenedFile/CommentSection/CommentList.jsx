import React from "react";
import Tools from "../../../Tools";
import CommentDisplay from "./CommentDisplay";
import "./CommentList.css";
// import SubComments from "./SubComments";
export default function CommentList({ event }) {
  return (
    <div className="commentListContainer">
      <li>
        <div className="commentListMainContainer">
          <div className="commentListProfileImg">
            <img src={event.profileImg} alt="pic" />
            {event.comments.length > 0 ? <p id="ThreadDisplay"></p> : null}
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
          <Tools content={event} />
        </div>
      </li>

      {event.comments.length > 0 && <CommentDisplay event={event} />}
    </div>
  );
}
