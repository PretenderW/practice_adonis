const Database = use('Database');

class AuthController {
  async login({ request }) {
    const indata = request.only(['user', 'pass']);
    const user = await Database.select('*')
      .from('user')
      // .leftJoin('trole', 'tuser.fidrole_fk', 'trole.fidrole')
      .where('user', '=', `${indata.user}`)
      .andWhere('password', `${indata.pass}`);
    /* if (user[0]) {
      return true;
    }
    return false; */
    if (user[0]) return user[0].role;
    return 'anonimous';
  }

  async registrar({ request }) {
    const indata = request.only(['user', 'pass', 'pass1']);
    if (indata.pass !== indata.pass1) return 0;
    const userId = await Database.table('users').insert({ user: `${indata.user}`, password: `${indata.pass}` });
    return userId;
  }
}

module.exports = AuthController;
