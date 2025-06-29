const express = require("express");
const app = express();
const path = require("path");

let talks = Object.create(null);

app.use(express.json());
app.use(express.static("public")); 

let etag = "0";
app.get("/talks", (req, res) => {
  if (req.headers["if-none-match"] === etag) {
    res.status(304).end();
    return;
  }
  res.set("ETag", etag);
  res.json(Object.values(talks));
});

app.put("/talks/:title", (req, res) => {
  let { presenter, summary } = req.body;
  talks[req.params.title] = {
    title: req.params.title,
    presenter,
    summary,
    comments: []
  };
  etag = String(Date.now());
  res.status(204).end();
});

app.delete("/talks/:title", (req, res) => {
  delete talks[req.params.title];
  etag = String(Date.now());
  res.status(204).end();
});

app.post("/talks/:title/comments", (req, res) => {
  let talk = talks[req.params.title];
  if (talk) {
    talk.comments.push({
      author: req.body.author,
      message: req.body.message
    });
    etag = String(Date.now());
    res.status(204).end();
  } else {
    res.status(404).end();
  }
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));
