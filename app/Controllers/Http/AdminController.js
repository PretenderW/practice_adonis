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

  async producttypeatributelist() {
    const datalist = await Database.select('*')
      .from('tproducttypeatribute')
      .leftJoin('tproducttype', 'tproducttypeatribute.fidproducttype_fk', 'tproducttype.fidproducttype')
      .rightJoin('tatribute', 'tproducttypeatribute.fidatribute_fk', 'tatribute.fidatribute');
    return datalist;
  }

  async addproducttypeatribute({ request }) {
    const indata = request.only(['fatribute', 'ftype']);
    const typeId = await Database.select('fidproducttype')
      .from('tproducttype')
      .where('fnameproducttype', '=', `${indata.ftype}`);

    const atributeId = await Database.select('fidatribute')
      .from('tatribute')
      .where('fnameatribute', '=', `${indata.fatribute}`);

    const id = await Database.table('tprodacttypeatribute').insert({
      fidatribute_fk: `${atributeId}`,
      fidproducttype_fk: `${typeId}`
    });
    return id;
  }

  async editproducttypeatribute({ request }) {
    const indata = request.only(['fatribute', 'ftype', 'fidproducttypeatribute']);
    const typeId = await Database.select('fidproducttype')
      .from('tproducttype')
      .where('fnameproducttype', '=', `${indata.ftype}`);

    const atributeId = await Database.select('fidatribute')
      .from('tatribute')
      .where('fnameatribute', '=', `${indata.fatribute}`);

    const affectedRows = await Database.table('tproducttypeatribute')
      .where('fidproducttypeatribute', '=', `${indata.fidproducttypeatribute}`)
      .update({
        fidproducttype_fk: `${typeId}`,
        fidatribute_fk: `${atributeId}`
      });
    return affectedRows;
  }

  async deleteproducttypeatribute({ request }) {
    const indata = request.only(['fidproducttypeatribute']);
    const affectedRows = await Database.table('tproducttypeatribute')
      .where('fidproducttypeatribute', '=', `${indata.fidproducttypeatribute}`)
      .delete();
    return affectedRows;
  }
}

module.exports = AdminController;
