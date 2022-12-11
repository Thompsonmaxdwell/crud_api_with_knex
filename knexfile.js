// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "crud-api",
      user: "postgres",
      password: "3600",
      port: 5432,
      host: "localhost",
    },
    pool: {
      min: 2,
      max: 10,

    },

    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  staging: {
    client: "pg",
    connection: {
      database: "postgres://localhost/crud-api",
      user: "thompson",
      password: "3600",
    },
    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },
  },

  production: {
    client: "pg",
    connection: {
      database: "postgres://localhost/crud-api",
      user: "thompson",
      password: "3600",
    },
    pool: {
      min: 2,
      max: 10,
    },

    migrations: {
      tableName: "knex_migrations",
      directory: "./db/migrations",
    },
    seeds: {
      directory: "./db/seeds",
    },

  },
};
