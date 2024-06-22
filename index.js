const express = require("express");
require("dotenv").config();
const connectDB = require("./src/config//db");
const taskRoutes = require("./src/routes/taskRoutes");
const cors = require("cors");

// create express app
const app = express();

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173","https://taskpro-nahid.surge.sh","https://taskpro-nahid.vercel.app"],
  })
);
// port
const PORT = process.env.PORT || 3000;

connectDB();

app.use("/tasks", taskRoutes);

app.get("/", (req, res) => {
  res.send({
    message: "server is running",
  });
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
