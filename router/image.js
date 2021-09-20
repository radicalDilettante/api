import express from "express";
import request from "request";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    res.set("Content-Type", "image/png");
    res.header("Access-Control-Allow-Origin", "*");
    request.get(req.query.url).pipe(res);
  } catch (error) {
    console.log(error);
    res.sendStatus(404);
  }
});

export default router;
