const Atribute = use('App/Models/Atribute');
const Type = use('App/Models/Type');

class AtributeSeeder {
  async run() {
    await Atribute.query().delete();
    const types = await Type.pair('name', 'id');

    const atributes = [
      { name: 'screen', type_id: types.nout },
      { name: 'screen', type_id: types.phone },
      { name: 'model', type_id: types.car },
      { name: 'model', type_id: types.phone }
    ];

    await Atribute.createMany(atributes);
  }
}

module.exports = AtributeSeeder;
