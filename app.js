import express from "express";

const app = express();

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((error) => {
  console.log(error);
  res.sendStatus(500);
});
app.listen(8080);
