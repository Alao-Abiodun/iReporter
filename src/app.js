// Packages Modules
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Custom Modules
const userRoute = require("./routes/user.route");
const incidentRoute = require("./routes/incident.route");
const documentationRoute = require("./routes/documentations.route");
const connection = require("./databases/db");

// Database connection

// MAIN ENTRY POINT
app.get("/", (req, res) => {
  res.json({ message: "This is the main application entry point" });
});

app.use("/api/v1", userRoute);
app.use("/api/v1", incidentRoute);
app.use("/api/v1", documentationRoute);

app.listen(PORT, () => {
  console.log(`The app is running at ${PORT}`);
  connection.connect(function (err) {
    if (err) {
      return console.error("error: " + err.message);
    }
    console.log("Connected to the MySQL server.");
  });
});

module.exports = app;
