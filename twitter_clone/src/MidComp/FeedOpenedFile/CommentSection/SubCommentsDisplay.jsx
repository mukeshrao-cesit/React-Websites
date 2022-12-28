import React from "react";
import SubCommentsList from "./SubCommentsList";

export const SubCommentsDisplay = ({ postContent, setEvent }) => {
  function handleEvent(data) {
    setEvent((prev) => {
      return {
        ...prev,
        subComments: prev.subComments.map((elem) => {
          if (elem.id === data.id) {
            return { ...data, isSubCommentPresent: false };
          } else {
            return elem;
          }
        }),
        isSubCommentPresent: !prev.isSubCommentPresent,
      };
    });
  }
  return (
    <div>
      {postContent.subComments.map((data) => (
        <SubCommentsList
          postContent={data}
          handleEvent={handleEvent}
          key={data.id}
        />
      ))}
    </div>
  );
};
