import express from "express";
import puppeteer from "puppeteer";

const router = express.Router();
const chromeOptions = {
  headless: true,
  defaultViewport: null,
  args: ["--incognito", "--no-sandbox", "--single-process", "--no-zygote"],
};

router.get("/", async (req, res) => {
  const browser = await puppeteer.launch(chromeOptions);
  try {
    const page = await browser.newPage();
    await page.goto(req.query.url, { waitUntil: "networkidle2" });
    const image = await page.screenshot({ fullPage: true });
    await browser.close();
    res.set("Content-Type", "image/png");
    res.header("Access-Control-Allow-Origin", "*");
    res.send(image);
  } catch (error) {
    await browser.close();
    console.log(error);
    res.sendStatus(404);
  }
});

export default router;
