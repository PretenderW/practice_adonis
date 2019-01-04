const Schema = use('Schema');

class ProductAtributeSchema extends Schema {
  up() {
    this.create('product_atributes', table => {
      table.increments();
      table.varchar('value', 255).notNullable();
      table
        .integer('product_id')
        .notNullable()
        .index();
      table
        .foreign('product_id')
        .references('id')
        .on('products')
        .onDelete('cascade');
      table
        .integer('atribute_id')
        .notNullable()
        .index();
      table
        .foreign('atribute_id')
        .references('id')
        .on('atributes')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('product_atributes');
  }
}

module.exports = ProductAtributeSchema;
