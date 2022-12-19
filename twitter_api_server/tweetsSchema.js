const mongoose = require("mongoose");

const nestedObj = new mongoose.Schema({
  id: String,
  likesCount: Number,
  commentsCount: Number,
  retweetCount: Number,
  isAlreadyLiked: Boolean,
  subComments: [],
  replyedTo: String,
  description: String,
  profileId: String,
  profileName: String,
  profileImg: String,
});

const mongoSchema = new mongoose.Schema({
  profileName: String,
  profileId: String,
  profileImg: String,
  id: String,
  description: String,
  documents: String,
  comments: [nestedObj],
  likesCount: Number,
  commentsCount: Number,
  retweetCount: Number,
  isAlreadyLiked: Boolean,
});

const MongoModelTweet = mongoose.model(
  "mongoModelTweet",
  mongoSchema,
  "tweets"
);

module.exports = MongoModelTweet;
