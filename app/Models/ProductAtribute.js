const Model = use('Model');

class ProductAtribute extends Model {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }

  product() {
    return this.hasOne('App/Models/Product');
  }

  atribute() {
    return this.hasOne('App/Models/Atribute');
  }
}

module.exports = ProductAtribute;
