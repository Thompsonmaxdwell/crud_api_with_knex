/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, email: 'thompson@gmail.com', first_name: 'thompson', },
    {id: 2, email: 'oghenefokethompson@gmail.com', first_name: "Oghenefokethompson", },
    {id: 3, email: 'john@gmail.com', first_name: "John", },
  ]);
};
