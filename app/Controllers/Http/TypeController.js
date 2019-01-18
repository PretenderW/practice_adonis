const Type = use('App/Models/Type');

class TypeController {
  async index() {
    return Type.all();
  }

  async store({ request }) {
    if (Type.newType(request)) return 201;
    return 500;
  }

  async show({ params }) {
    const { id } = params;
    return Type.findOrFail(id);
  }

  async update({ params, request }) {
    const { id } = params;
    return Type.updateType(id, request);
  }

  async destroy({ params, response }) {
    const { id } = params;
    const type = await Type.findOrFail(id);
    await type.delete();
    return response.json({ msg: 'Ok' });
  }
}

module.exports = TypeController;
