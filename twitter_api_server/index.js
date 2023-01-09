const express = require("express");
const cors = require("cors");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");

app.use(cors());

const bodyParser = require("body-parser");

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const MongoModelTweet = require("./tweetsSchema");
const MongoModelUser = require("./userSchema");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

//socket connection
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5001",
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected : ${socket.id}`);

  socket.on("sendPost", (data) => {
    socket.broadcast.emit("newPost", data);
  });

  socket.on("sendComment", (data) => {
    socket.broadcast.emit("newComment", data);
  });
});

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

app.patch("/subcomment", async (req, res) => {
  const { _id, newSubComments, commentID } = await req.body;
  const tweet = await MongoModelTweet.findOne({ _id });
  const updatedTweet = {
    ...tweet._doc,
    comments: tweet._doc.comments.map((elem) => {
      if (elem.id === commentID) {
        return {
          ...newSubComments,
          commentsCount: newSubComments.commentsCount + 1,
          isSubCommentPresent: !newSubComments.isSubCommentPresent,
        };
      } else {
        return elem;
      }
    }),
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

app.post("/update", async (req, res) => {
  const { _id, isAlreadyLiked, likesCount } = req.body;
  const tweet = await MongoModelTweet.findOne({ _id });
  const updatedTweet = {
    ...tweet._doc,
    isAlreadyLiked: !isAlreadyLiked,
    likesCount: isAlreadyLiked ? likesCount - 1 : likesCount + 1,
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
server.listen(5000, () => {
  console.log("connected success");
});
