
exports.up = function(knex) {
  return knex.schema.createTable('department',(table)=>{
    table.increments('id'),
    table.string('name').notNullable(),
    table.string('stregth').notNullable(),
    table.string('capacity').notNullable()
})
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("department")
};
