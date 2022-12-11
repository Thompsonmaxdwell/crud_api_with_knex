const { response } = require("express");
const userServices = require("./UserServices");

class UserController {
  async getPerson(req, res, next) {
    const user = await userServices.getUser();
     
    res.send(user);
  }
}

module.exports = new UserController();
