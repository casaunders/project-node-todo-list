import express from "express";

const app = express();

const port = 3080;

app.listen(port, (req, res) => {
  console.log(`Server is runnuing on port ${port}.`);
});
