class Type {
  register(Model) {
    Model.findByName = function findByName(name) {
      const query = this.query();
      if (name) {
        query.where({ name });
      }
      return query.fetch();
    };

    Model.updateType = async function updateType(id, request) {
      const atr = request.only(['name']);
      const type = await this.findOrFail(id);
      await type.merge({ name: `${atr.name}` });
      await type.save();
      return type;
    };

    Model.newType = async function newType(request) {
      const atr = request.only(['name']);
      const type = await this.create({ name: `${atr.name}` });
      return type;
    };
  }
}

module.exports = Type;
