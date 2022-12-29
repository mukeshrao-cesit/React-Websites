import React from "react";
import "./ProfileImgDetails.css";
export function ProfileOverViewPic({ postDetails }) {
  return (
    <div className="ProfileImgDetails">
      <div>
        <div className="ProfileBackgroundImgContainer">
          <img
            className="ProfileBackgroundImg"
            src={postDetails.profileBackgroundImg}
            alt="profile Background"
          />
          <div className="profilePic">
            <img src={postDetails.profileImg} alt="profilePic" />
          </div>
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
}
