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
