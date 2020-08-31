const db = require("../data/config");

function getProjects() {
  return db("projects");
}

function getProjectTasks(id) {
  return db("project_tasks")
    .where("projects.id", id)
    .join("projects", "projects.id", "project_tasks.project_id")
    .join("tasks", "tasks.id", "project_tasks.task_id")
    .select(
      "projects.id as projectId",
      "tasks.description",
      "tasks.completed as task_completed"
    );
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
  getProjectTasks,
};
