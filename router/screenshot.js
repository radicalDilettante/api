import express from "express";
import puppeteer from "puppeteer";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();
    await page.goto(req.query.url);
    const image = await page.screenshot({ fullPage: true });
    await browser.close();
    res.set("Content-Type", "image/png");
    res.send(image);
  } catch (error) {
    console.log(error);
  }
});

export default router;
