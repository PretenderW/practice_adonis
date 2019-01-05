const Model = use('Model');

class Product extends Model {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }

  types() {
    return this.hasOne('App/Models/Type');
  }

  user() {
    return this.hasOne('App/Models/User');
  }

  productAribute() {
    return this.hasMany('App/Models/ProductAtribute');
  }
}

module.exports = Product;
