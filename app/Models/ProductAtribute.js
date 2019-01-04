const Model = use('Model');

class ProductAtribute extends Model {
  static get updatedAtColumn() {
    return null;
  }

  static get createdAtColumn() {
    return null;
  }
}

module.exports = ProductAtribute;
