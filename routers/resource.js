const express = require("express");
const Resource = require("../models/resources");

const router = express.Router();

router.get("/resources", async (req, res, next) => {
  try {
    const resources = await Resource.getResources();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.get("/resources/:id", async (req, res, next) => {
  try {
    const resource = await Resource.getResourcesById(req.params.id);
    if (!resource) {
      return res.status(404).json({
        message: "Resource not found.",
      });
    }
    res.json(resource);
  } catch (err) {
    next(err);
  }
});

router.post("/resources", (req, res) => {
  const resourceData = req.body;

  Resource.addResource(resourceData)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create a new resource." });
    });
});

router.put("/resources/:id", (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Resource.getResourcesById(id)
    .then((resource) => {
      if (resource) {
        Resource.updateResource(changes, id).then((updatedScheme) => {
          res.json(updatedScheme);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find resource with given id" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to update resource" });
    });
});

router.delete("/resources/:id", (req, res) => {
  const { id } = req.params;

  Resource.deleteResource(id).then((deleted) => {
    if (deleted) {
      res.json({ message: "Deleted. Game Over" });
    } else {
      res
        .status(404)
        .json({ message: "Could not find the resource with the given id." });
    }
  });
});

module.exports = router;
