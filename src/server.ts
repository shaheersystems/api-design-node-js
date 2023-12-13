import express from "express";
import router from "./router";
import cors from "cors";
import { protect } from "./modules/auth";
import { createNewUser, signIn } from "./handlers/user";
import { checkBlockedIP, collectAPIRequests } from "./modules/analytics";
import { getAnalytics } from "./handlers/analytics";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", protect, checkBlockedIP, collectAPIRequests, router);
app.use("/analytics", protect, getAnalytics);
app.post("/user", createNewUser);
app.post("/signin", signIn);

export default app;
