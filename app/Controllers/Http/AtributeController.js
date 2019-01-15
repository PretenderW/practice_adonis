const Atribute = use('App/Models/Atribute');

class AtributeController {
  async index() {
    return Atribute.all();
  }

  async store({ request }) {
    if (Atribute.newAtribute(request)) return 201;
    return 500;
  }

  async show({ params }) {
    const { id } = params;
    return Atribute.findOrFail(id);
  }

  async update({ params, request }) {
    const { id } = params;
    return Atribute.updateAtribute(id, request);
  }

  async destroy({ params, response }) {
    const { id } = params;
    const atr = await Atribute.findOrFail(id);
    await atr.delete();
    return response.json({ msg: 'Ok' });
  }
}

module.exports = AtributeController;
