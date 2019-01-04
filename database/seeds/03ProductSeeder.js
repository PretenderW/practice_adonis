const Product = use('App/Models/Product');
const User = use('App/Models/User');
const Type = use('App/Models/Type');

class ProductSeeder {
  async run() {
    await Product.query().delete();

    const types = await Type.pair('name', 'id');
    const users = await User.pair('name', 'id');

    const products = [
      { name: 'asus', user_id: users.Ivanov, type_id: types.nout },
      { name: 'lenovo', user_id: users.Petrov, type_id: types.phone },
      { name: 'audi', user_id: users.Petrov, type_id: types.car },
      { name: 'xiaomi', user_id: users.Sidorov, type_id: types.phone }
    ];

    await Product.createMany(products);
  }
}

module.exports = ProductSeeder;
