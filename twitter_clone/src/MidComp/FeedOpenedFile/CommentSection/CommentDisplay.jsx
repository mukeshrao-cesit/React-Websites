import axios from "axios";
import React from "react";
import CommentList from "./CommentList";
import { useDispatch } from "react-redux";

export default function CommentDisplay({
  postContent,
  setPostContent,
  reRender,
}) {
  const dispatch = useDispatch();

  async function handleSubb(comment) {
    setPostContent((prev) => {
      return {
        ...prev,
        comments: prev.comments.map((elem) => {
          if (elem.id === comment.id) {
            return {
              ...comment,
              isSubCommentPresent: false,
            };
          } else {
            return elem;
          }
        }),
      };
    });
    try {
      const res = await axios.patch("http://localhost:5000/subcomment", {
        _id: postContent._id,
        commentID: comment.id,
        newSubComments: comment,
      });

      dispatch({
        type: "UPDATETWEET",
        newComment: res.data,
        _id: postContent._id,
      });
    } catch (err) {
      console.log(err);
    }
    reRender();
  }
  return (
    <div>
      {postContent.comments.map((data) => (
        <CommentList
          postComments={data}
          handleSubb={handleSubb}
          key={data.id}
        />
      ))}
    </div>
  );
}
