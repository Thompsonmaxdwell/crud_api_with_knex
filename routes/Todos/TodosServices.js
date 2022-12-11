const bodyParser = require("body-parser");
const knex = require("../../db/knex");

class TodosController {
  async createService(body) {
    // const todos = await knex.raw(
    //   "insert into todos (title, completed, user_id) values(?, ?, ?)",
    //   ["Second data added ", false, "3"]
    // );
    const { title, completed, user_id } = body;
    const todos = await knex("todos").insert({
      title,
      completed,
      user_id,
    });

    return todos;
  }

  // get all todos
  async getTodos() {
    const todos = await knex.select().from("todos");
    return todos;
  }

  // get only one todos by id
  async getOneTodos(id_params) {
    const todos = await knex.select().from("todos").where("id", id_params);
    return todos;
  }

  // Update todos by ID
  async updateTodos(id_params, body) {
    const { title, completed } = body;

    const todos = await knex("todos").where("id", id_params).update({
      title,
      completed,
    });

    return todos;
  }

  // delete todos from todos tabel
  async deleteTodos(id_params) {
    const todos = await knex("todos").where("id", id_params).del();
    return todos;
  }
}

module.exports = new TodosController();
