import React from "react";
import { useLocation } from "react-router-dom";
import { ProfileOverViewNavBar } from "./ProfileOverViewNavBar";
import { ProfileOverViewPic } from "./ProfileOverViewPic";
import { ProfileOverViewDetails } from "./ProfileOverViewDetails";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const ProfileMainCont = () => {
  const location = useLocation();
  const [postDetails, setPostDetails] = useState(location.state.postDetails);
  useEffect(() => {
    apiCall();
  }, []);
  async function apiCall() {
    const userDetails = await axios
      .get("http://localhost:5000/user")
      .then((res) => res.data);
    const user = userDetails.filter(
      (elem) => elem.profileId === postDetails.profileId
    );
    setPostDetails(...user);
  }
  return (
    <div>
      <ProfileOverViewNavBar postDetails={postDetails} />
      <ProfileOverViewPic postDetails={postDetails} />
      <ProfileOverViewDetails postDetails={postDetails} />
    </div>
  );
};
