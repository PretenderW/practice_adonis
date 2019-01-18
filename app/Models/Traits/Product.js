const ProductAtribute = use('App/Models/ProductAtribute');

class Product {
  register(Model) {
    Model.findByName = function findByName(name) {
      const query = this.query();
      if (name) {
        query.where({ name });
      }
      return query.fetch();
    };

    Model.sortProduct = function sortProduct(request) {
      const indata = request.only(['name', 'sort', 'direction']);
      const query = this.query();
      if (!indata.direction) indata.direction = 'arc';
      if (indata.name) query.where({ name: `${indata.name}` });
      switch (indata.sort) {
        case 1:
          query.orderBy('name', indata.direction);
          break;
        case 2:
          query.orderBy('type_id', indata.direction);
          break;
        case 3:
          query.orderBy('user_id', indata.direction);
          break;
        case 4:
          query.orderBy('price', indata.direction);
          break;
        case 5:
          query.orderBy('created_at', indata.direction);
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
