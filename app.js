const express = require("express");
const router = require("./route/route");
var cors = require("cors");
const mongoose = require("mongoose");
const { config } = require("dotenv");
config();

const app = express();

app.use(cors());

// Express midlewar
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);
const port = process.env.Port || 8080;

// If wrong route
app.get("*", (req, res) => {
  res.send("<h2> Page not found</h2>");
});

// Port configuration
app.listen(port, () => {
  mongoose
    .connect("mongodb://localhost:27017/bookDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Mongodb is connect and running");
    })
    .catch((err) => {
      console.log(err);
    });
  console.log(`Server is running on PORT ${port} `);
});
