import React from "react";

export const FeedOpenedComment = () => {
  return (
    <div>
      <div className="commentSectionContainer">
        <div className="commentSectionProfile">
          <img src={userDetails.profileImg} alt="profile" />
        </div>
        <div className="commentSectionTextArea">
          <form onSubmit={addComment}>
            <textarea
              id="commentTextArea"
              onInput={textGrow}
              onChange={handleEvent}
              placeholder="Tweet your reply"
            ></textarea>
            <button type="submit">Reply</button>
          </form>
        </div>
      </div>
    </div>
  );
};
