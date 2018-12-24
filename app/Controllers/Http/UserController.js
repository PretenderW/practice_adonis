const Database = use('Database');

class UserController {
  async productlist({ request }) {
    const cookies = request.cookies('fuserid');
    const datalist = await Database.select('*')
      .from('tproduct')
      .where('fiduser_fk', '=', `${cookies.fuserid}`);
    return datalist;
  }

  async addproduct({ request }) {
    const cookies = request.cookies('fuserid');
    const indata = request.only(['fname', 'fprice', 'ftype', 'faccessibility']);
    const typeId = await Database.select('fidproducttype')
      .from('tproducttype')
      .where('fnameproducttype', '=', `${indata.ftype}`);
    /* код для добавления параметров в дополнительные таблицы */
    const productId = await Database.table('tproduct').insert({
      fnameproduct: `${indata.fname}`,
      fprice: `${indata.fprice}`,
      fidproducttype_fk: `${typeId}`,
      fiduser_fk: `${cookies.fuserid}`,
      faccessibility: `${indata.faccessibility}`
    });
    return productId;
  }

  async product({ request }) {
    const indata = request.only(['fidproduct']);
    const data = await Database.select('*')
      .from('tproduct')
      .where('fidproduct', '=', `${indata.fidproduct}`);
    return data;
  }

  async editproduct({ request }) {
    const indata = request.only(['fname', 'fprice', 'ftype', 'faccessibility', 'fidproduct']);
    const typeId = await Database.select('fidproducttype')
      .from('tproducttype')
      .where('fnameproducttype', '=', `${indata.ftype}`);

    const affectedRows = await Database.table('tproduct')
      .where('fidproduct', '=', `${indata.fidproduct}`)
      .update({
        fnameproduct: `${indata.fname}`,
        fprice: `${indata.fprice}`,
        fidproducttype_fk: `${typeId}`,
        faccessibility: `${indata.faccessibility}`
      });
    return affectedRows;
  }

  async deleteproduct({ request }) {
    const indata = request.only(['fidproduct']);
    const affectedRows = await Database.table('tproduct')
      .where('fidproduct', '=', `${indata.fidproduct}`)
      .delete();
    return affectedRows;
  }
}

module.exports = UserController;
