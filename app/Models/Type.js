const Model = use('Model');

class Type extends Model {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }

  product() {
    return this.hasMany('App/Models/Product');
  }

  aribute() {
    return this.hasMany('App/Models/Atribute');
  }
}

module.exports = Type;
