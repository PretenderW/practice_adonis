const Model = use('Model');

class Atribute extends Model {
  static boot() {
    super.boot();
    this.addTrait('Atribute');
  }

  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }

  types() {
    return this.hasOne('App/Models/Type');
  }

  productAribute() {
    return this.hasMany('App/Models/ProductAtribute');
  }
}

module.exports = Atribute;
