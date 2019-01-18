// const Database = use('Database');
const User = use('App/Models/User');
// const Hash = use('Hash');

class AuthController {
  async login({ request }) {
    const indata = request.only(['user', 'pass']);
    return User.findUser(indata.user);
  }

  /*  async registrar({ request }) {
    const indata = request.only(['user', 'pass', 'pass1']);
    if (indata.pass !== indata.pass1) return 0;
    const userId = await Database.table('users').insert({ user: `${indata.user}`, password: `${indata.pass}` });
    return userId;
  } */
}

module.exports = AuthController;
