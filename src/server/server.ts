import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import router from "../routes/index";

/*
  BASIC SETUP
*/
config();
const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.info(`Server started at port ${PORT}`);
});

/*
  ROUTES BEGINS HERE
*/

app.use("/", router);

export default app;
