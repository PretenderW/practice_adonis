const Database = use('Database');

class ProductController {
  async productlist() {
    const datalist = await Database.select('*').from('tproduct');
    return datalist;
  }

  async product({ request }) {
    const indata = request.only(['fidproduct']);
    const data = await Database.select('*')
      .from('tproduct')
      .where('fidproduct', '=', `${indata.fidproduct}`);
    return data;
  }
}

module.exports = ProductController;
