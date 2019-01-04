const ProductAtribute = use('App/Models/ProductAtribute');
const Database = use('Database');

class ProductAtributeSeeder {
  async run() {
    await ProductAtribute.query().delete();

    const datalist = await Database.select('products.id as prod_id', 'atributes.id as atr_id')
      .from('products')
      .leftJoin('atributes', 'products.type_id', 'atributes.type_id');
    //    console.log(datalist);
    let productatributes = [];
    for (let i in datalist)
      productatributes.push({ product_id: datalist[i].prod_id, atribute_id: datalist[i].atr_id, value: i });
    //    console.log(productatributes);
    await ProductAtribute.createMany(productatributes);
  }
}

module.exports = ProductAtributeSeeder;
