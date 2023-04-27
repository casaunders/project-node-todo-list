import express from "express";
import bodyParser from "body-parser";
import { sequelize } from "./db/index.js";

const app = express();

const port = 3080;

sequelize
  .sync()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, (req, res) => {
  console.log(`Server is runnuing on port ${port}.`);
});

app.use(bodyParser.json());
