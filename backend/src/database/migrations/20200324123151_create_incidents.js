
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(talbe){
      talbe.increments()
      
      talbe.string('title').notNullable()
      talbe.string('description').notNullable()
      talbe.string('value').notNullable()

      talbe.string('ong_id').notNullable()
      talbe.foreign('ong_id').references('id').inTable('ongs')
    })  
  }
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
  }
  