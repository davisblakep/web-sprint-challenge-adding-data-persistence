exports.up = async function (knex) {
  await knex.schema.createTable("projects", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
    table.bool("completed").notNull().defaultTo("false");
  });

  await knex.schema.createTable("resources", (table) => {
    table.increments("id");
    table.text("name").notNull();
    table.text("description");
  });

  await knex.schema.createTable("tasks", (table) => {
    table.increments("id");
    table.text("description").notNull();
    table.text("notes");
    table.bool("completed").notNull().defaultTo("false");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
