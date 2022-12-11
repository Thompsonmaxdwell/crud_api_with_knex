const { colours } = require("nodemon/lib/config/defaults");
const todosServices = require("./todosServices");

class TodosController {
  async createTodos(req, res, next) {
    const todos = await todosServices.createService(req.body);
    return res.send(todos);
  }

  async getTodos(req, res, next) {
    const todos = await todosServices.getTodos();
    return res.send(todos);
  }

  
  async getOneTodos(req, res, next) {
    const todos = await todosServices.getOneTodos(req?.params?.id);
    return res.send(todos);
  }

  async updateTodos(req, res, next) {
    const todos = await todosServices.updateTodos(req?.params?.id, req.body);
    res.send({ todos });
  }

  async deletTodos(req, res, next) {
    const todos = await todosServices.deleteTodos(req?.params?.id);
    res.send({todos});
  }
}

module.exports = new TodosController();
