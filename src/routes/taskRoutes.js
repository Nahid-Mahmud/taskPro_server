const express = require("express");
const { postTasks } = require("../controllers/taskControllers");

const router = express.Router();

router.post("/", postTasks);

module.exports = router;
