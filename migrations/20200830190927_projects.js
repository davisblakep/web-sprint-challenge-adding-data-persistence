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

  await knex.schema.createTable("project_tasks", (table) => {
    // table.primary(["project_id", "task_id"]);
    table.integer("project_id").notNull();
    //   .references("id")
    //   .inTable("projects")
    //   .onDelete("CASCADE")
    //   .onUpdate("CASCADE");
    table.integer("task_id").notNull();
    //   .references("id")
    //   .inTable("tasks")
    //   .onDelete("CASCADE")
    //   .onUpdate("CASCADE");
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists("project_tasks");
  await knex.schema.dropTableIfExists("tasks");
  await knex.schema.dropTableIfExists("resources");
  await knex.schema.dropTableIfExists("projects");
};
