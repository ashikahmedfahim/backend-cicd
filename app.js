const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ name: "Ashik Ahmed" });
});

app.listen(port, () => {
  console.log("Server is running on port: " + port);
});
