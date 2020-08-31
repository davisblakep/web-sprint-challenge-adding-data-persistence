const db = require("../data/config");

function getProjects() {
  return db("projects");
}

function getProjectsById(id) {
  return db("projects").where("projects.id", id).first();
}

function addProject(project) {
  return db("projects")
    .insert(project, "id")
    .then(([id]) => getProjectsById(id));
}

function updateProject(changes, id) {
  return db("projects").where({ id }).update(changes);
}

function deleteProject(id) {
  return db("projects").where({ id }).delete();
}

module.exports = {
  getProjects,
  getProjectsById,
  addProject,
  updateProject,
  deleteProject,
};
