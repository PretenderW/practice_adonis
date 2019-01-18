const Product = use('App/Models/Product');

class ProductController {
  async index({ request }) {
    return Product.sortProduct(request);
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
