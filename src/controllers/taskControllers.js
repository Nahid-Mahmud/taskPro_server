const Task = require("../models/taskModel");

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

module.exports = { postTasks };
