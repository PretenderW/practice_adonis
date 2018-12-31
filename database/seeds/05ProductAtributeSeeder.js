/*
|--------------------------------------------------------------------------
| 05ProductAtributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const ProductAtribute = use('App/Models/ProductAtribute');

class ProductAtributeSeeder {
  async run() {
    await ProductAtribute.query().delete();

    const productatributes = [
      { product_id: 1, atribute_id: 1, value: '15"' },
      { product_id: 2, atribute_id: 2, value: '4.5"' },
      { product_id: 2, atribute_id: 4, value: 'S820' },
      { product_id: 3, atribute_id: 3, value: 'A5' },
      { product_id: 4, atribute_id: 2, value: '5.5"' },
      { product_id: 4, atribute_id: 4, value: '6A' }
    ];

    await ProductAtribute.createMany(productatributes);
  }
}

module.exports = ProductAtributeSeeder;
