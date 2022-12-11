const express = require("express");
const TodosController = require("./Todos/TodosController");
const UserController = require("./Users/UserController");

const route = express.Router();
route.get("/users", UserController.getPerson);
route.post("/todos", TodosController.createTodos);
route.get("/todos", TodosController.getTodos);
route.get("/todos/:id", TodosController.getOneTodos);
route.put("/todos/:id", TodosController.updateTodos);
route.delete("/todos/:id", TodosController.deletTodos);

module.exports = route;

