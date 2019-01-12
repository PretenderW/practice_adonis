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

    Model.sortProduct = function sortProduct(name, sort) {
      const query = this.query().where({ name });
      switch (sort) {
        case 1:
          query.orderBy('name');
          break;
        case 2:
          query.orderBy('type_id');
          break;
        case 3:
          query.orderBy('user_id');
          break;
        case 4:
          query.orderBy('price');
          break;
        case 5:
          query.orderBy('created_at');
          break;
        default:
          break;
      }
      return query.fetch();
    };

    Model.updateProduct = async function updateProduct(id, name, atr) {
      const pr = await this.findOrFail(id);
      await pr.merge({ name: `${name}` });
      for (const i in atr) {
        if (atr.hasOwnProperty(i)) {
          const pa = ProductAtribute.findByData(id, atr[i].id);
          ProductAtribute.updateProductAtribute(pa, id, atr[i].id, atr[i].value);
        }
      }
      await pr.save();
      return pr;
    };

    Model.newProduct = async function newProduct(name, atr) {
      const pr = await this.create({ name: `${name}` });
      const id = await this.findByName(name);
      for (const i in atr) {
        if (atr.hasOwnProperty(i)) {
          const pa = ProductAtribute.findByData(id, atr[i].id);
          ProductAtribute.updateProductAtribute(pa, id, atr[i].id, atr[i].value);
        }
      }
      return pr;
    };
  }
}

module.exports = Product;
