const db = require("../data/config");

function getResources() {
  return db("resources");
}

function getResourcesById(id) {
  return db("resources").where("resources.id", id).first();
}

function addResource(resource) {
  return db("resources")
    .insert(resource, "id")
    .then(([id]) => getResourcesById(id));
}

function updateResource(changes, id) {
  return db("resources").where({ id }).update(changes);
}

function deleteResource(id) {
  return db("resources").where({ id }).delete();
}

module.exports = {
  getResources,
  getResourcesById,
  addResource,
  updateResource,
  deleteResource,
};
