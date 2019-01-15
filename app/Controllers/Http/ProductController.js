const Product = use('App/Models/Product');

class ProductController {
  async index({ request }) {
    const indata = request.only(['name', 'sort', 'direction']);
    return Product.sortProduct(indata.name, indata.sort, indata.direction);
  }

  async store({ request }) {
    return Product.newProduct(request);
  }

  async show({ params }) {
    const { id } = params;
    return Product.findOrFail(id);
  }

  async update({ params, request }) {
    const { id } = params;
    return Product.updateProduct(id, request);
  }

  async destroy({ params, response }) {
    const { id } = params;
    const type = await Product.findOrFail(id);
    await type.delete();
    return response.json({ msg: 'Ok' });
  }
}

module.exports = ProductController;
