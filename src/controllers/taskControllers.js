const Task = require("../models/taskModel");

// post tasks

const postTasks = async (req, res) => {
  try {
    const NewTask = new Task({
      title: req.body.title,
      description: req.body.description,
    });

    const taskPostConfirmation = await NewTask.save();

    res.status(201).send({
      message: "task Created successfully",
      task: taskPostConfirmation,
    });
  } catch (err) {
    console.log(err.message);
    res.send({
      message: err.message,
    });
  }
};

// get all tasks
const getTasks = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(201).send(allTasks);
  } catch (err) {
    console.log(err.message);
    res.send({
      message: err.message,
    });
  }
};

// edit tasks by id

const editTasksById = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findByIdAndUpdate(id, req.body, { new: true });
    if (!task) {
      return res.status(404).send({
        message: "Task not found",
      });
    }
    res.status(201).send({
      message: "Task updated successfully",
      task: task,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = { postTasks, getTasks ,editTasksById};
