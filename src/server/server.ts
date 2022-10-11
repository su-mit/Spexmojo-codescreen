import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import router from "../routes/index";
import cron from "node-cron";

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

// Cron fro 1 day Time: 0 0 0 * * *
cron.schedule("*/10 * * * * *", function () {
    console.log("running a task every 10 second");
});

/*
  ROUTES BEGINS HERE
*/

app.use("/", router);

export default app;
