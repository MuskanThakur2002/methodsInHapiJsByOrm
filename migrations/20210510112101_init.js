
exports.up = function(knex) {
  return knex.schema.createTable('users',(table)=>{
        table.increments('id'),
        table.string('name').notNullable(),
        table.string('email').notNullable().unique(),
        table.string('salary').notNullable(),
        table.string('department_id').notNullable(),
        table.string('bank_details').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("users")
};
