class Atribute {
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

    Model.updateAtribute = async function updateAtrribute(id, name, type) {
      const atr = await this.findOrFail(id);
      await atr.merge({ name: `${name}`, type_id: `${type}` });
      await atr.save();
      return atr;
    };

    Model.newAtribute = async function newAtribute(name, type) {
      const atr = await this.create({ name: `${name}`, type_id: `${type}` });
      return atr;
    };
  }
}

module.exports = Atribute;
