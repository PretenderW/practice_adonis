class Atribute {
  register(Model) {
    Model.updateAtribute = async function updateAtrribute(id, request) {
      const atr = request.only(['name', 'type_id']);
      const upd = await this.findOrFail(id);
      await upd.merge({ name: `${atr.name}`, type_id: `${atr.type_id}` });
      await upd.save();
      return upd;
    };

    Model.newAtribute = async function newAtribute(request) {
      const atr = request.only(['name', 'type_id']);
      const rez = await this.create({ name: `${atr.name}`, type_id: `${atr.type_id}` });
      return rez;
    };
  }
}

module.exports = Atribute;
