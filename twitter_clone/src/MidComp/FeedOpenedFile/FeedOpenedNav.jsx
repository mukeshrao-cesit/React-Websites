import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeedOpenedNav.css";

export default function FeedOpenedNav() {
  const navigate = useNavigate();
  function handlePath(e) {
    e.preventDefault();
    navigate("/Feeds");
  }
  return (
    <div className="backToMainPageContainer">
      <div className="backToMainPage">
        <div onClick={handlePath}>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-18jsvk2 r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"
          >
            <g>
              <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
            </g>
          </svg>
        </div>
        <h2>Tweet</h2>
      </div>
    </div>
  );
}
