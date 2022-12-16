const mongoose = require("mongoose");

const nestedUserObj = new mongoose.Schema({
  id: String,
  likesCount: Number,
  commentsCount: Number,
  isAlreadyLiked: Boolean,
  comments: [],
  documents: String,
  retweet: String,
  description: String,
  profileId: String,
  profileName: String,
  profileImg: String,
});
const mongoSchemaUser = new mongoose.Schema({
  id: String,
  profileName: String,
  profileId: String,
  born_date: String,
  created_at: String,
  followers: Number,
  following: Number,
  location: String,
  bio: String,
  tweets: [nestedUserObj],
  currentOverview: String,
  profileBackgroundImg: String,
  profileImg: String,
});

const MongoModelUser = mongoose.model(
  "mongoModelUser",
  mongoSchemaUser,
  "userDetails"
);

module.exports = MongoModelUser;
