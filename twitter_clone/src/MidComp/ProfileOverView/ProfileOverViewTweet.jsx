import React from "react";
import { useSelector } from "react-redux";
import ProfileTweet from "./ProfileTweet.jsx";

function ProfileOverViewTweet({ media }) {
  const userDetails = useSelector((state) => state.userDetails);
  return (
    <div>
      {media.map((tweet) => (
        <ProfileTweet tweet={tweet} key={userDetails.id} />
      ))}
    </div>
  );
}
export default ProfileOverViewTweet;
