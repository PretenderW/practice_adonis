const Type = use('App/Models/Type');

class TypeSeeder {
  async run() {
    await Type.query().delete();

    const types = [{ name: 'nout' }, { name: 'phone' }, { name: 'car' }];

    await Type.createMany(types);
  }
}

module.exports = TypeSeeder;
