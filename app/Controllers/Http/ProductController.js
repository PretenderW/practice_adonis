const Product = use('App/Models/Product');

class ProductController {
  async index() {
    return Product.findByName();
  }

  async store({ request }) {
    const indata = request.only(['name', 'sort']);
    return Product.sortProduct(indata.name, indata.sort);
  }

  async show({ params }) {
    const { id } = params;
    return Product.findById(id);
  }

  async update({ params, request }) {
    const { id } = params;
    const { name, attrs } = request.all();
    return Product.updateProduct(id, name, attrs);
  }

  async destroy({ params, response }) {
    const { id } = params;
    const type = await Product.findOrFail(id);
    await type.delete();
    return response.json({ msg: 'Ok' });
  }
}

module.exports = ProductController;
