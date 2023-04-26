import express from "express";
import bodyParser from "body-parser";

const app = express();

const port = 3080;

app.listen(port, (req, res) => {
  console.log(`Server is runnuing on port ${port}.`);
});

app.use(bodyParser.json());
