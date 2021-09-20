import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const image = new Image();
    image.src = req.query.url;
    res.set("Content-Type", "image/png");
    res.send(image);
  } catch (error) {
    await browser.close();
    console.log(error);
    res.sendStatus(404);
  }
});

export default router;
