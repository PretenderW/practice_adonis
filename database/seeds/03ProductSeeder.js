/*
|--------------------------------------------------------------------------
| 03ProductSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const Product = use('App/Models/Product');

class ProductSeeder {
  async run() {
    await Product.query().delete();

    const products = [
      { name: 'asus', user_id: 1, type_id: 1 },
      { name: 'lenovo', user_id: 2, type_id: 2 },
      { name: 'audi', user_id: 2, type_id: 3 },
      { name: 'xiaomi', user_id: 3, type_id: 2 }
    ];

    await Product.createMany(products);
  }
}

module.exports = ProductSeeder;
