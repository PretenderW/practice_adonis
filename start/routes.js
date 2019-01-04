const Route = use('Route');

Route.get('/', () => ({ status: 'Ok', version: '1.0.0' }));

Route.post('/login', 'AuthController.login');
Route.post('/registrar', 'AuthController.registrar');

Route.resource('products', 'ProductController').apiOnly();
Route.resource('types', 'TypeController').apiOnly();
Route.resource('atributes', 'AtributeController').apiOnly();
Route.resource('products/productatributes', 'ProductAtributeController').apiOnly();
