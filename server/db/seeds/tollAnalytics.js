/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('tollAnalytics').del()
  await knex('tollAnalytics').insert([
    {id: 1, bridge_id: 1, timestamp: '2077-05-23, 03:45:00', revenue: 456},
    {id: 2, bridge_id: 2, timestamp: '2077-05-25, 12:30:00', revenue: 500},
    {id: 3, bridge_id: 3, timestamp: '2077-05-28, 17:50:00', revenue: 100}
  ]);
};
