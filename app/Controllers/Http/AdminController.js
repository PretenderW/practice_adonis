const Database = use('Database');

class AdminController {
  async producttypelist() {
    const datalist = await Database.select('*').from('tproducttype');
    return datalist;
  }

  async addproducttype({ request }) {
    const indata = request.only(['ftype']);
    const typeId = await Database.table('tproducttype').insert({
      fnameproducttype: `${indata.ftype}`
    });
    return typeId;
  }

  async producttype({ request }) {
    const indata = request.only(['fidproducttype']);
    const data = await Database.select('*')
      .from('tproducttype')
      .where('fidproducttype', '=', `${indata.fidproducttype}`);
    return data;
  }

  async editproducttype({ request }) {
    const indata = request.only(['ftype', 'fidproducttype']);
    const affectedRows = await Database.table('tproducttype')
      .where('fidproducttype', '=', `${indata.fidproducttype}`)
      .update({ fidproducttype: `${indata.ftype}` });
    return affectedRows;
  }

  async deleteproducttype({ request }) {
    const indata = request.only(['fidproducttype']);
    const affectedRows = await Database.table('tproducttype')
      .where('fidproducttype', '=', `${indata.fidproducttype}`)
      .delete();
    return affectedRows;
  }

  async productatributelist() {
    const datalist = await Database.select('*').from('tatribute');
    return datalist;
  }

  async addproductatribute({ request }) {
    const indata = request.only(['fnameatribute', 'ftype']);
    const atributeTypeId = await Database.select('fidatributetype')
      .from('tatributetype')
      .where('fnameatributetype', '=', `${indata.ftype}`);

    const typeId = await Database.table('tatribute').insert({
      fnameatribute: `${indata.fnameatribute}`,
      fidatributetype_fk: `${atributeTypeId}`
    });
    return typeId;
  }

  async productatribute({ request }) {
    const indata = request.only(['fidatribute']);
    const data = await Database.select('*')
      .from('tatribute')
      .where('fidatribute', '=', `${indata.fidatribute}`);
    return data;
  }

  async editproductatribute({ request }) {
    const indata = request.only(['fnameatribute', 'ftype', 'fidatribute']);
    const atributeTypeId = await Database.select('fidatributetype')
      .from('tatributetype')
      .where('fnameatributetype', '=', `${indata.ftype}`);

    const affectedRows = await Database.table('tatribute')
      .where('fidatribute', '=', `${indata.fidatribute}`)
      .update({
        fidatributetype_fk: `${atributeTypeId}`,
        fnameatribute: `${indata.fnameatribute}`
      });
    return affectedRows;
  }

  async deleteproductatribute({ request }) {
    const indata = request.only(['fidatribute']);
    const affectedRows = await Database.table('tatribute')
      .where('fidatribute', '=', `${indata.fidatribute}`)
      .delete();
    return affectedRows;
  }
}

module.exports = AdminController;
