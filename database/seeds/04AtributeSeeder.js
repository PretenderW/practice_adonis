/*
|--------------------------------------------------------------------------
| 04AtributeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
// const Factory = use('Factory')
const Atribute = use('App/Models/Atribute');

class AtributeSeeder {
  async run() {
    await Atribute.query().delete();

    const atributes = [
      { name: 'screen', type_id: 1 },
      { name: 'screen', type_id: 2 },
      { name: 'model', type_id: 3 },
      { name: 'model', type_id: 2 }
    ];

    await Atribute.createMany(atributes);
  }
}

module.exports = AtributeSeeder;
