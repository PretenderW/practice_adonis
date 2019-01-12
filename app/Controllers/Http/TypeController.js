const Type = use('App/Models/Type');

class TypeController {
  async index() {
    return Type.findByName();
  }

  async store({ request }) {
    const { name } = request.all();
    return Type.findByName(name);
  }

  async show({ params }) {
    const { id } = params;
    return Type.findById(id);
  }

  async update({ params, request }) {
    const { id } = params;
    const { name } = request.only(['name']);
    return Type.updateType(id, name);
  }

  async destroy({ params, response }) {
    const { id } = params;
    const type = await Type.findOrFail(id);
    await type.delete();
    return response.json({ msg: 'Ok' });
  }
}

module.exports = TypeController;
