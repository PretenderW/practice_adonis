// const Database = use('Database');
const User = use('App/Models/User');
// const Hash = use('Hash');

class AuthController {
  async login({ request }) {
    const indata = request.only(['user', 'pass']);
    //  return 1;
    // return User.findUser();
    // return Hash.make(indata.pass);
    return User.findUser(indata.user);
    // return User.findUser(indata.user, Hash.make(indata.pass));
    /*  return indata.user;
    const user = await Database.select('*')
      .from('users')
      .where('user', `${indata.user}`)
//      .andWhere('password', `${indata.pass}`);
    /* if (user[0]) {
      return true;
    }
    return false; */
    /*  return indata;
    if (user[0]) return user[0].role;
    return 'anonimous'; */
  }

  /*  async registrar({ request }) {
    const indata = request.only(['user', 'pass', 'pass1']);
    if (indata.pass !== indata.pass1) return 0;
    const userId = await Database.table('users').insert({ user: `${indata.user}`, password: `${indata.pass}` });
    return userId;
  } */
}

module.exports = AuthController;
