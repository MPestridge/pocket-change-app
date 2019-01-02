
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.boolean('admin').notNullable().defaultTo('false');
    table.string('name', 100).notNullable().defaultTo('');
    table.string('user_name', 50).notNullable()defaultTo('').unique();
    table.string('password',50).notNullable().defaultTo('');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
