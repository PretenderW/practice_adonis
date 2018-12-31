/*
|--------------------------------------------------------------------------
| 02TypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const Type = use('App/Models/Type');

class TypeSeeder {
  async run() {
    await Type.query().delete();

    const types = [{ name: 'lenovo' }, { name: 'phone' }, { name: 'car' }];

    await Type.createMany(types);
  }
}

module.exports = TypeSeeder;
