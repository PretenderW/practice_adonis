class ProductAtribute {
  register(Model) {
    Model.findByData = function findByData(product, atribute) {
      const query = this.query();
      if (product && atribute) {
        query.where('product_di', `${product}`).andWhere('atribute_id', `${atribute}`);
      }
      return query.fetch();
    };

    Model.findById = function findById(id) {
      const query = this.query();
      if (id) {
        query.where({ id });
      }
      return query.fetch();
    };

    Model.updateProductAtribute = async function updateProductAtribute(id, product, atribute, value) {
      const pa = await this.findOrFail(id);
      await pa.merge({ product_id: `${product}`, atribute_id: `${atribute}`, value: `${value}` });
      await pa.save();
      return pa;
    };

    Model.newProductAtribute = async function newProductAtribute(product, atribute, value) {
      const pa = await this.create({ product_id: `${product}`, atribute_id: `${atribute}`, value: `${value}` });
      return pa;
    };
  }
}

module.exports = ProductAtribute;
