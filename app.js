import express from "express";
import screenshotRouter from "./router/screenshot.js";

const app = express();

app.use("/screenshot", screenshotRouter);

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error) => {
  console.log(error);
  res.sendStatus(500);
});
app.listen(8080);
