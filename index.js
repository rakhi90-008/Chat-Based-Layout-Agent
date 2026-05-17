const express = require("express");
const cors = require("cors");
const updateLayout = require("./layoutEngine");
const sampleLayout = require("./sampleLayout.json");

const app = express();

app.use(cors());
app.use(express.json());

let currentLayout = JSON.parse(JSON.stringify(sampleLayout));

app.post("/chat", (req, res) => {
  const { message } = req.body;

  currentLayout = updateLayout(currentLayout, message);

  res.json({
    updatedLayout: currentLayout,
  });
});

app.get("/layout", (req, res) => {
  res.json(currentLayout);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});