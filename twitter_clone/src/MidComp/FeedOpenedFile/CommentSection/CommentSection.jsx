import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CommentSection.css";

function CommentSection({ handleNewComment }) {
  const userDetails = useSelector((state) => state.userDetails);
  const [commentInput, setCommentInput] = useState("");
  function textGrow(event) {
    event.target.style.height = "3px";
    event.target.style.height = event.target.scrollHeight + "px";
  }
  return (
    <div>
      <div className="commentSectionContainer">
        <div className="commentSectionProfile">
          <img src={userDetails.profileImg} alt="profile" />
        </div>
        <div className="commentSectionTextArea">
          <form onSubmit={handleNewComment(commentInput)}>
            <textarea
              id="commentTextArea"
              onInput={textGrow}
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
export default CommentSection;
