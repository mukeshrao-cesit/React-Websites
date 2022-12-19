import React from "react";
import CommentList from "./CommentList";

export default function CommentDisplay({ postContent }) {
  return (
    <div>
      {postContent.comments.map((data) => (
        <CommentList event={data} key={data.id} />
      ))}
    </div>
  );
}
