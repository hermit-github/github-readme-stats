import "dotenv/config";
import statsCard from "./api/index.js";
import repoCard from "./api/pin.js";
import langCard from "./api/top-langs.js";
import wakatimeCard from "./api/wakatime.js";
import gistCard from "./api/gist.js";
import express from "express";

const app = express();
app.listen(process.env.port || 9000, () => {
  console.log(`Server running on port:${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to Hermit's Instance of Github Readme Stats",
  });
});

app.get("/api", statsCard);
app.get("/api/pin", repoCard);
app.get("/api/top-langs", langCard);
app.get("/api/wakatime", wakatimeCard);
app.get("/api/gist", gistCard);
