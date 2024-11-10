import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.send("This is SERVER");
});

app.get("/users", (req, res) => {
  res.send({ usersTest: true, signal: "good" });
});

app.listen(PORT, () => {
  console.log(`Sewrver listening on port ${PORT}`);
});
