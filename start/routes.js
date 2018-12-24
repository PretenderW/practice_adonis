/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.post('/login', 'AuthController.login');
Route.post('/registrar', 'AuthController.registrar');

Route.post('/productlist', 'ProductController.productlist');
Route.post('/product', 'ProductController.product');

Route.post('/user/productlist', 'UserController.productlist');
Route.post('/user/addproduct', 'UserController.addproduct');
Route.post('/user/addproduct', 'UserController.product');
Route.post('/user/editproduct', 'UserController.editproduct');
Route.post('/user/deleteproduct', 'UserController.deleteproduct');

Route.post('/admin/typeproductlist', 'AdminController.producttypelist');
Route.post('/admin/addtypeproduct', 'AdminController.addproducttype');
Route.post('/user/addproduct', 'AdminController.producttype');
Route.post('/admin/edittypeproduct', 'AdminController.editproducttype');
Route.post('/admin/deletetypeproduct', 'AdminController.deleteproducttype');
Route.post('/admin/producatributetlist', 'AdminController.productatributelist');
Route.post('/admin/addproductatribute', 'AdminController.addproductatribute');
Route.post('/user/addproduct', 'AdminController.productatribute');
Route.post('/admin/editproductatribute', 'AdminController.editproductatribute');
Route.post('/admin/deleteproductatribute', 'AdminController.deleteproductatribute');

Route.post('/admin/producttypeatributelist', 'AdminController.producttypeatributelist');
Route.post('/admin/addproducttypratribute', 'AdminController.addproducttypeatribute');
Route.post('/admin/editproducttypeatribute', 'AdminController.editproducttypeatribute');
Route.post('/admin/deleteproducttypeatribute', 'AdminController.deleteproducttypeatribute');
