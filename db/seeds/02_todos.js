/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("todos").del();
  await knex("todos").insert([
    { id: 1, title: "The goat", completed: true, user_id: 3 },
    {
      id: 2,
      title: "The Beautiful once are not yet to be born",
      completed: false,
      user_id: 3,
    },
    {
      id: 3,
      title: "A story of a thousand mill begins with a step",
      completed: true,
      user_id: 3,
    },
    {
      id: 4,
      title:
        "In The land of the blade man,  The man that have only one eye in the ",
      completed: false,
      user_id: 3,
    },
  ]);
};
