// Budget API

const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const url = "mongodb://127.0.0.1:27017/nbad";
const cors = require("cors");
const app = express();
const port = 3000;

//Connecting to the mongoose collection:
mongoose.connect(url).then(() => {
  console.log("connected to database!");
});

// Creating the schemal model for chart data
const ChartData = new mongoose.Schema({
  title: { type: String },
  budget: { type: Number },
  color: { type: String, min: 6 },
});

// Adding the Chart Collection in mongoose Collection:
const Chart = mongoose.model("Chart", ChartData);

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/budget", async (req, res) => {
  const data = await Chart.find();
  res.json(data);
});

app.post("/add-budget-data", async (req, res) => {
  const { title, budget, color } = req.body;
  const chart_data = new Chart({ title, budget, color });
  const response = await chart_data.save();
  if (!response) {
    console.log("Error inserting document in the database");
    res.json("Error inserting document in the database");
  }
  console.log("Document Added in the database!");
  res.json("Document Added in the database!");
});

app.listen(port, () => {
  console.log(`API served at http://localhost:${port}`);
});
