const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hellow Rafa");
});

app.listen(3001);
