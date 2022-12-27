const cors = require("cors");

const express = require("express");

const app = express();

const bodyParser = require("body-parser");
// const db = require("./mySql");
//noSql connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const MongoModelTweet = require("./tweetsSchema");
const MongoModelUser = require("./userSchema");

app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//tweet
app.get("/posts", async (req, res) => {
  //mongo connection
  const tweet_data = await MongoModelTweet.find();
  res.send(tweet_data);
});

//user
app.get("/user", async (req, res) => {
  //mongo connection
  const user_data = await MongoModelUser.find();
  res.send(user_data);
});

app.post("/posts", async (req, res) => {
  const reqData = req.body;
  const post = new MongoModelTweet({
    ...reqData,
    createdAt: new Date().toISOString(),
  });
  try {
    post.save();
    res.send(post);
  } catch (error) {
    console.log(error);
  }
});

app.patch("/comment", async (req, res) => {
  const { _id, newComments } = await req.body;
  const tweet = await MongoModelTweet.findOne({ _id });
  const updatedTweet = {
    ...tweet._doc,
    comments: [newComments, ...tweet._doc.comments],
    commentsCount: (tweet._doc.commentsCount += 1),
  };
  const comment = await MongoModelTweet.findByIdAndUpdate(_id, updatedTweet, {
    new: true,
  });
  try {
    res.send(comment);
  } catch (error) {
    console.log(error);
  }
});
const db = mongoose.connection;
db.once("open", function () {
  console.log("Connected Successfully");
});
mongoose
  .connect(
    "mongodb+srv://MukeshRao:Mukeshrao@cluster0.y7xwjjp.mongodb.net/?retryWrites=true&w=majority"
  )
  .then((res) => {});
app.listen(5000, () => {
  console.log("Server started in port 5000");
});
