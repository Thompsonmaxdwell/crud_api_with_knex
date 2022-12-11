const knex = require("../../db/knex");

class UserServices {
  async getUser() {
    //  const user = await knex.raw("select * from users where id = 1",);
    const user = await knex.select().from("users");
    return user;
  }
}

module.exports = new UserServices();
