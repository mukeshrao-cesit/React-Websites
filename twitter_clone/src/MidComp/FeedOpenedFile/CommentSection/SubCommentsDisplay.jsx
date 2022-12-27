import React from "react";
import SubCommentsList from "./SubCommentsList";

export const SubCommentsDisplay = ({ postContent, handleSub }) => {
  return (
    <div>
      {postContent.subComments.map((data) => (
        <SubCommentsList
          handleSub={handleSub}
          postContent={data}
          key={data.id}
        />
      ))}
    </div>
  );
};
