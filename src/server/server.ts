import express from "express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import router from "../routes/index";
import cron from "node-cron";
import { listOrderByDate } from "../routes/order/order";

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

// Cron Job 1 day Time: 0 0 0 * * *
cron.schedule("0 0 0 * * *", async function () {
    const dateTimeStamp = new Date().toISOString();
    console.log(
        await listOrderByDate(
            // Generating date substring frm dateTimeStamp
            dateTimeStamp.substring(0, dateTimeStamp.indexOf("T"))
        )
    );
});

/*
  ROUTES BEGINS HERE
*/

app.use("/", router);

export default app;
