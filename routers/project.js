const express = require("express");
const Project = require("../models/projects");

const router = express.Router();

router.get("/projects", async (req, res, next) => {
  try {
    const projects = await Project.getProjects();
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

router.get("/projects/:id", async (req, res, next) => {
  try {
    const project = await Project.getProjectsById(req.params.id);
    if (!project) {
      return res.status(404).json({
        message: "Project not found.",
      });
    }
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.get("/projects/:id/tasks", async (req, res, next) => {
  try {
    const project = await Project.getProjectTasks(req.params.id);
    if (!project) {
      return res.status(404).json({
        message: "Project not found.",
      });
    }
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.get("/projects/:id/resources", async (req, res, next) => {
  try {
    const project = await Project.getProjectResources(req.params.id);
    if (!project) {
      return res.status(404).json({
        message: "Project not found.",
      });
    }
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.post("/projects", (req, res) => {
  const projectData = req.body;

  Project.addProject(projectData)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create a new project." });
    });
});

router.post("/projects/tasks", (req, res) => {
  const data = req.body;

  Project.addTaskToProjectById(data)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to add a new task to the project." });
    });
});

router.post("/projects/resources", (req, res) => {
  const data = req.body;

  Project.addResourceToProjectById(data)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch((err) => {
      res
        .status(500)
        .json({ message: "Failed to add a new resource to the project." });
    });
});

router.put("/projects/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Project.getProjectsById(id)
    .then((project) => {
      if (project) {
        Project.updateProject(changes, id).then((updatedScheme) => {
          res.json(updatedScheme);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find project with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update project" });
    });
});

router.delete("/projects/:id", (req, res) => {
  const { id } = req.params;

  Project.deleteProject(id).then((deleted) => {
    if (deleted) {
      res.json({ message: "Deleted. Game Over" });
    } else {
      res
        .status(404)
        .json({ message: "Could not find the project with the given id." });
    }
  });
});

module.exports = router;
