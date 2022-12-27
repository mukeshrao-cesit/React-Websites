import { createStore } from "@reduxjs/toolkit";

const initialState = {
  tweets: [],
  userDetails: {},
};

function tweetsUpdate(state = initialState, action) {
  switch (action.type) {
    case "INIT": {
      return { ...state, tweets: action.newTweets };
    }
    case "USER": {
      return { ...state, userDetails: action.newTweets };
    }
    case "UPDATE": {
      return { ...state, tweets: [action.newTweets, ...state.tweets] };
    }
    case "UPDATETWEET": {
      return {
        ...state,
        tweets: state.tweets.map((item) => {
          if (action._id === item._id) {
            return {
              ...action.newComment,
              commentsCount: action.newComment.commentsCount++,
            };
          } else {
            return { ...item };
          }
        }),
      };
    }
    case "USERTWEET": {
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          tweets: [action.newTweets, ...state.userDetails.tweets],
        },
      };
    }
    case "USERPOST": {
      return {
        ...state,
        userDetails: {
          ...state.userDetails,
          tweets: [...action.newTweets],
        },
      };
    }
    default: {
      return state;
    }
  }
}

const store = createStore(tweetsUpdate);

export default store;
