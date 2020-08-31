const db = require("../data/config");

function getTasks() {
  return db("tasks");
}

function getTasksById(id) {
  return db("tasks").where("tasks.id", id).first();
}

function addTask(task) {
  return db("tasks")
    .insert(task, "id")
    .then(([id]) => getTasksById(id));
}

function updateTask(changes, id) {
  return db("tasks").where({ id }).update(changes);
}

function deleteTask(id) {
  return db("tasks").where({ id }).delete();
}

module.exports = {
  getTasks,
  getTasksById,
  addTask,
  updateTask,
  deleteTask,
};
