require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const exerciseRouter = require("./routes/exercise");
const userRouter = require("./routes/user");
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;
require("./database");

app.use(cors());
app.use(express.json());

app.use("/api/exercises", exerciseRouter);
app.use("/api/users", userRouter);

app.listen(port, () => {
  console.log("connected to tyhe server ", port);
});
