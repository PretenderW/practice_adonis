const Atribute = use('App/Models/Atribute');

class AtributeController {
  async index() {
    return Atribute.findByName();
  }

  async store({ request }) {
    const { name } = request.all();
    return Atribute.findByName(name);
  }

  async show({ params }) {
    const { id } = params;
    return Atribute.findById(id);
  }

  async update({ params, request }) {
    const { id } = params;
    const atr = request.only(['name', 'type_id']);
    return Atribute.updateAtribute(id, atr.name, atr.type_id);
  }

  async destroy({ params, response }) {
    const { id } = params;
    const atr = await Atribute.findOrFail(id);
    await atr.delete();
    return response.json({ msg: 'Ok' });
  }
}

module.exports = AtributeController;
