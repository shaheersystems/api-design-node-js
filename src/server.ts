import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("server is working");
  res.status(200);
  res.json({ message: "server is working" });
});

export default app;
