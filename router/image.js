import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (error) throw error;
    res.set("Content-Type", "image/png");
    res.header("Access-Control-Allow-Origin", "*");
    req.pipe(request(req.query.url)).pipe(res);
  } catch (error) {
    await browser.close();
    console.log(error);
    res.sendStatus(404);
  }
});

export default router;
