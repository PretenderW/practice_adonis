const Validator = use('Validator');
const Type = use('App/Models/Type');

const atrType = async function atrType(typeId) {
  return Type.findOrFail(typeId);
};

Validator.extend('atrType', atrType);

class StoreAtribute {
  get rules() {
    return {
      name: 'required|max:60',
      type_id: 'required|atrType'
    };
  }
}

module.exports = StoreAtribute;
