const express = require("express");
const path = require("path");
const app = express();
const _path = path.join(__dirname, "./dist");
app.use("/", express.static(_path));
app.listen(5000, () => {
  console.log("lazy 이미지서버 : 12010시작 http://127.0.0.1:5000");
});
