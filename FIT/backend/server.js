const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Enable JSON parsing

let names = [];

app.post("/api/save-name", (req, res) => {
  const { firstName, lastName } = req.body;

  if (!firstName || !lastName) {
    return res
      .status(400)
      .json({ error: "Both first and last names are required" });
  }

  // Check if the full name already exists
  if (names.some((n) => n.firstName === firstName && n.lastName === lastName)) {
    return res.json({ message: "Name already exists" });
  }

  // Save the full name as an object
  names.push({ firstName, lastName });
  res.json({ message: "Name saved successfully" });
});

// API to retrieve the full list of names
app.get("/api/names", (req, res) => {
  res.json({ names });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
