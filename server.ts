import express from "express";
import cors from 'cors';
var app = express();

app.use(cors())

app.get("/", function (req, res) {
  res.send("Hello world!");
});

app.listen(8080);
