/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class AtributeSchema extends Schema {
  up() {
    this.create('atributes', table => {
      table.increments();
      table.string('name', 50).notNullable();
      table
        .integer('type_id')
        .notNullable()
        .index();
      table
        .foreign('type_id')
        .references('id')
        .on('types')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('atributes');
  }
}

module.exports = AtributeSchema;
