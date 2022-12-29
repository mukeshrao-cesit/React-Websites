import React from "react";
import "./ProfileTweet.css";
import Tools from "../../Tools";

function ProfileTweet({ tweet }) {
  return (
    <div className="feed-list-wrapper">
      <li className="tweetList">
        {tweet.retweet && (
          <div className="retweetTop">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="r-14j79pv r-4qtqp9 r-yyyyoo r-10ptun7 r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1janqcz"
            >
              <g>
                <path d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"></path>
              </g>
            </svg>
            <p>{tweet.retweet} Retweeted</p>
          </div>
        )}
        <div className="tweetContainer">
          <img className="tweetProfileImg" src={tweet.profileImg} alt="docu" />
          <div className="tweetContent">
            <div className="tweetProfileDetails">
              <h3>{tweet.profileName}</h3>
              <p>{tweet.profileId}</p>
            </div>
            <p>{tweet.description}</p>
            {tweet.documents.length > 0 && (
              <img src={tweet.documents} alt="doc" />
            )}
            <Tools content={tweet} />
          </div>
        </div>
      </li>
      {/* {isFeedCommentClicked ? (
        <FeedCommentPopUp
          feedCommentClickResponse={feedCommentClickResponse}
          commentUpdate={commentUpdate}
          data={tweet}
        ></FeedCommentPopUp>
      ) : null} */}
    </div>
  );
}
export default ProfileTweet;
