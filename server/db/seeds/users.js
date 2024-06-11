/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1, name: 'Olaf the Boogy Troll'},
    {id: 2, name: 'Callgulla the Hydrophobic Troll'},
    {id: 3, name: 'Bump the Troll Who\'s On His Learner\'s After 8 Years'},
    {id: 4, name: 'Clump the Traffic Troll'},
    {id: 5, name: 'Dump the Stinky Troll'},
    {id: 6, name: 'Slump the Manic-Depressive Troll'},
    {id: 7, name: 'Kump the Sick Dance Moves Troll'},
    {id: 8, name: 'Pump the Swole Troll'},
    {id: 9, name: 'Mump the Diseased Troll'},
    {id: 10, name: 'Gump the Forest Troll'},
    {id: 11, name: 'Lump the Pre-Cancerous Troll'},
    {id: 12, name: 'Frump the Shabby Troll'},
    {id: 13, name: 'Rump the Troll Who Doesn\'t Lie'}
  ]);
};
