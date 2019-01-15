const ProductAtribute = use('productAtribute');

class Product {
  register(Model) {
    Model.findByName = function findByName(name) {
      const query = this.query();
      if (name) {
        query.where({ name });
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

    Model.sortProduct = function sortProduct(name, sort, direction = 'ask') {
      const query = this.query().where({ name });
      switch (sort) {
        case 1:
          query.orderBy('name', direction);
          break;
        case 2:
          query.orderBy('type_id', direction);
          break;
        case 3:
          query.orderBy('user_id', direction);
          break;
        case 4:
          query.orderBy('price', direction);
          break;
        case 5:
          query.orderBy('created_at', direction);
          break;
        default:
          break;
      }
      return query.fetch();
    };

    Model.updateProduct = async function updateProduct(id, request) {
      const { name, cost, attrs } = request.all();
      const pr = await this.findOrFail(id);
      await pr.merge({ name: `${name}`, cost: `${cost}` });
      const results = [];
      for (const i in attrs) if (attrs.hasOwnProperty(i)) results.push(ProductAtribute.findByData(id, attrs[i].id));
      await Promise.all(results);
      const resultsupd = [];
      for (const i in attrs)
        if (attrs.hasOwnProperty(i))
          resultsupd.push(ProductAtribute.updateProductAtribute(results[i], id, attrs[i].id, attrs[i].value));
      await Promise.all(resultsupd);
      await pr.save();
      return pr;
    };

    Model.newProduct = async function newProduct(request) {
      const { name, cost, attrs } = request.all();
      const pr = await this.create({ name: `${name}`, cost: `${cost}` });
      const results = [];
      for (const i in attrs) {
        if (attrs.hasOwnProperty(i)) {
          const pa = ProductAtribute.findByData(pr, attrs[i].id);
          results.push(pa);
        }
      }
      await Promise.all(results);
      const resultsupd = [];
      for (const i in attrs)
        if (attrs.hasOwnProperty(i))
          resultsupd.push(ProductAtribute.updateProductAtribute(results[i], pr, attrs[i].id, attrs[i].value));
      await Promise.all(resultsupd);
      return pr;
    };
  }
}

module.exports = Product;
