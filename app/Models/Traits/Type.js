class Type {
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

    Model.updateType = async function updateType(id, name) {
      const type = await this.findOrFail(id);
      await type.merge({ name });
      await type.save();
      return type;
    };

    Model.newType = async function newType(name) {
      const type = await this.create({ name: `${name}` });
      return type;
    };
  }
}

module.exports = Type;
