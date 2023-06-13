const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");

const mongoDB = require("./db");
mongoDB();

app.use(cors());

app.use(express.json());
app.use("/api", require("./Routes/CreateUser"));
app.use("/api", require("./Routes/DisplayData"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
