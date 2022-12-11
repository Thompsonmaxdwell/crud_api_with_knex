/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("email").notNullable().unique();
      table.string("first_name").notNullable();
      table.timestamps(true, true);
    })
    .createTable("todos", (table) => {
      table.increments();
      table.string("title").notNullable();
      table.boolean("completed").notNullable().defaultTo(false);
      table.integer("user_id").references("id").inTable("users");
      table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("todos").dropTableIfExists("users");
};
