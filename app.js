import express from "express";
import cors from "cors";
import http from "http";

import screenshotRouter from "./router/screenshot.js";

const app = express();
app.use(cors());

setInterval(function () {
  http.get("https://apiwayne.herokuapp.com/");
}, 600000);

app.use("/screenshot", screenshotRouter);

app.use((req, res, next) => {
  console.log("server loaded");
  res.sendStatus(200);
});

app.use((error) => {
  console.log(error);
  res.sendStatus(500);
});
app.listen(process.env.PORT || 8080);
