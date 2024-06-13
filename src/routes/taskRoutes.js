const express = require("express");
const { postTasks, getTasks, editTasksById, deleteTasksById } = require("../controllers/taskControllers");

const router = express.Router();

router.post("/", postTasks);
router.get("/", getTasks);
router.put("/:id", editTasksById);
router.delete("/:id", deleteTasksById);

module.exports = router;
