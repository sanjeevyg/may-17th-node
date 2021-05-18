
exports.up = function(knex) {
  return knex.schema.connect.createTable('students', (student) => {
      student.increments('id')
      student.string('name')
      student.integer('phase')
  })
};

exports.down = function(knex) {
   return knex.schema.dropTable('students')
  
};
