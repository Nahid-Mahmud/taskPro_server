const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config//db");
const taskRoutes = require("./src/routes/taskRoutes");

// create express app
const app = express();

// middleware
app.use(express.json());
// port
const PORT = process.env.PORT || 3000;

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  connectDB();
});
