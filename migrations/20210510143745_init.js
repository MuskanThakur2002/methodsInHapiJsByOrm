
exports.up = function(knex) {
  return knex.schema.createTable('bank',(table)=>{
    table.increments('id'),
    table.string('bank_Name').notNullable(),
    table.string('account_number').notNullable(),
    table.string('ifsc').notNullable(),
    table.string('micr').notNullable(),
    table.string('branch').notNullable()
})
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("bank")
};
