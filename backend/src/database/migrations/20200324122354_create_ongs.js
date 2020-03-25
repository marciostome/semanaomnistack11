
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(talbe){
    talbe.string('id').primary()
    talbe.string('name').notNullable()
    talbe.string('email').notNullable()
    talbe.string('whatsapp').notNullable()
    talbe.string('city').notNullable()
    talbe.string('uf').notNullable()
  })  
}

exports.down = function(knex) {
  return knex.schema.dropTable('ongs')
}
