const express = require("express");
const Task = require("../models/tasks");

const router = express.Router();

router.get("/tasks", async (req, res, next) => {
  try {
    const tasks = await Task.getTasks();
    res.json(tasks);
  } catch (err) {
    next(err);
  }
});

router.get("/tasks/:id", async (req, res, next) => {
  try {
    const task = await Task.getTasksById(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Task not found.",
      });
    }
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.post("/tasks", (req, res) => {
  const taskData = req.body;

  Task.addTask(taskData)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create a new task." });
    });
});

router.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Task.getTasksById(id)
    .then((task) => {
      if (task) {
        Task.updateTask(changes, id).then((updatedScheme) => {
          res.json(updatedScheme);
        });
      } else {
        res.status(404).json({ message: "Could not find task with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update resource" });
    });
});

router.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  Task.deleteTask(id).then((deleted) => {
    if (deleted) {
      res.json({ message: "Deleted. Game Over" });
    } else {
      res
        .status(404)
        .json({ message: "Could not find the task with the given id." });
    }
  });
});

module.exports = router;
