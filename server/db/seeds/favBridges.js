/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('favBridges').del()
  await knex('favBridges').insert([
    {id: 1, user_id: null, bridges_id: null},
    {id: 2, user_id: null, bridges_id: null},
    {id: 3, user_id: null, bridges_id: null},
  ]);
};
