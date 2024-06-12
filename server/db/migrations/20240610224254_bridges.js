export async function up(knex) {
  await knex.schema.createTable('bridges', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('location')
    table.string('type')
    table.integer('year_built')
    table.integer('length_meters')
    table.integer('lanes').nullable()
    table.integer('added_by_user_id').references('users.id')
    table.integer('active_user_id').references('users.id')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('bridges')
}
