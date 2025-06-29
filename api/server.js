import express from "express";

let talks = Object.create(null);
let etag = "0";

const app = express();
app.use(express.json());

app.get("/talks", (req, res) => {
    if (req.headers["if-none-match"] === etag) {
        res.status(304).end();
        return;
    }
    res.setHeader("ETag", etag);
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
    const talk = talks[req.params.title];
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

export default function handler(req, res) {
    return app(req, res); // Delegate to Express
}
