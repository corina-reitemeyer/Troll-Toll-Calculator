export async function up(knex) {
    await knex.schema.createTable('favBridges', (table) => {
      table.increments('id').primary()
      table.integer('user_id').references('users.id').onDelete('cascade')
      table.integer('bridges_id').references('bridges.id').onDelete('cascade')
      // table.unique('')
    })
  }
  
  export async function down(knex) {
    await knex.schema.dropTable('favBridges')
  }
  