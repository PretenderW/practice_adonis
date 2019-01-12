const Schema = use('Schema');

class ProductSchema extends Schema {
  up() {
    this.create('products', table => {
      table.increments();
      table.varchar('name', 255).notNullable();
      table
        .integer('price')
        .notNullable()
        .defaultTo(0);
      table
        .integer('type_id')
        .notNullable()
        .index();
      table
        .foreign('type_id')
        .references('id')
        .on('types')
        .onDelete('cascade');
      table
        .integer('user_id')
        .notNullable()
        .index();
      table
        .foreign('user_id')
        .references('id')
        .on('users')
        .onDelete('cascade');
      table
        .bool('accessibility')
        .notNullable()
        .defaultTo('true');
      table.timestamp('created_at').defaultTo(this.fn.now());
    });
  }

  down() {
    this.drop('products');
  }
}

module.exports = ProductSchema;
