import app from "./server";
import * as dotenv from "dotenv";
dotenv.config();

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
