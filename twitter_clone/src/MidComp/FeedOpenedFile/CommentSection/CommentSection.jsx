import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./CommentSection.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import axios from "axios";
function CommentSection({ postContent, setPostContent, reRender }) {
  const userDetails = useSelector((state) => state.userDetails);
  const [commentInput, setCommentInput] = useState("");
  const dispatch = useDispatch();
  async function handleNewComment(e) {
    e.preventDefault();
    const payload = {
      profileId: userDetails.profileId,
      profileName: userDetails.profileName,
      profileImg: userDetails.profileImg,
      description: commentInput,
      id: uuidv4(),
      isSubCommentPresent: false,
      documents: "",
      subComments: [],
      likesCount: 0,
      commentsCount: 0,
      retweetCount: 0,
      isAlreadyLiked: false,
      replyedTo: postContent.profileId,
    };

    setCommentInput("");
    setPostContent((prev) => {
      return {
        ...prev,
        comments: [payload, ...prev.comments],
        commentsCount: (prev.commentsCount += 1),
        isSubCommentPresent: true,
      };
    });
    try {
      const res = await axios.patch("http://localhost:5000/comment", {
        _id: postContent._id,
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
    reRender();
  }
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
          <form onSubmit={handleNewComment}>
            <textarea
              id="commentTextArea"
              value={commentInput}
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
