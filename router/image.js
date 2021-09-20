import express from "express";
import fs from "fs";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    fs.readFile(req.query.url, (error, data) => {
      if (error) throw error;
      res.set("Content-Type", "image/png");
      res.header("Access-Control-Allow-Origin", "*");
      res.send(data);
    });
  } catch (error) {
    await browser.close();
    console.log(error);
    res.sendStatus(404);
  }
});

export default router;
