const mongoose = require("mongoose");

const mongoSchema = new mongoose.Schema({
  profileName: String,
  profileId: String,
  profileImg: String,
  id: String,
  description: String,
  documents: String,
  comments: [],
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
