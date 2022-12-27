import React, { useState } from "react";
import CommentList from "./CommentList";

export default function CommentDisplay({ postContent }) {
  const [postComments, setPostComments] = useState(postContent);
  function handleSubb(res) {
    console.log(postComments);
  }
  return (
    <div>
      {postComments.comments.map((data) => (
        <CommentList
          postComments={data}
          handleSubb={handleSubb}
          key={data.id}
        />
      ))}
    </div>
  );
}
