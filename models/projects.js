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
      "tasks.notes",
      "tasks.id as task_id",
      "tasks.completed as task_completed"
    );
}

function getProjectResources(id) {
  return db("project_resources")
    .where("projects.id", id)
    .join("projects", "projects.id", "project_resources.project_id")
    .join("resources", "resources.id", "project_resources.resource_id")
    .select(
      "projects.id as projectId",
      "resources.name as resource_name",
      "resources.description as resource_description",
      "resources.id as resource_id"
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

function addTaskToProjectById(data) {
  return db("project_tasks").insert(data);
}

function addResourceToProjectById(data) {
  return db("project_resources").insert(data);
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
  getProjectResources,
  addTaskToProjectById,
  addResourceToProjectById,
};
