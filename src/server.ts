import express from "express";
import router from "./router";
import morgan from "morgan";
import cors from "cors";

const app = express();

const customeLogger = (message) => (req, res, next) => {
  console.log(
    message,
    ":",
    req.method,
    req.url,
    "at",
    new Date().toISOString(),
    "code: ",
    res.statusCode
  );
  next();
};

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customeLogger("Request"));

app.get("/", (req, res) => {
  console.log("server is working");
  res.status(200);
  res.json({ message: "server is working" });
});

app.use("/api", router);

export default app;
