const express = require("express");
const { postTasks, getTasks, editTasksById } = require("../controllers/taskControllers");

const router = express.Router();

router.post("/", postTasks);
router.get("/", getTasks);
router.put("/:id", editTasksById);

module.exports = router;
