const Database = use('Database');

class AuthController {
  async login({ request }) {
    const indata = request.only(['user', 'pass']);
    /*  const user = await Database.table('tuser')
      .select('fiduser')
      .where('fuser', '=', `${indata.user}`)
      .andWhere('fpassword', `${indata.pass}`); */
    /*  const user = await Database.select('fiduser', 'fidrole', 'frole')
      .from('tuser', 'trole')
      .where('tuser.fidrole_fk', 'trole.fidrole')
      .where('fuser', '=', `${indata.user}`)
      .andWhere('fpassword', `${indata.pass}`); */
    const user = await Database.select('*')
      .from('tuser')
      .leftJoin('trole', 'tuser.fidrole_fk', 'trole.fidrole')
      .where('fuser', '=', `${indata.user}`)
      .andWhere('fpassword', `${indata.pass}`);
    /* if (user[0]) {
      return true;
    }
    return false; */
    // return user;
    if (user[0]) return user[0].frole;
    return 'anonimous';
  }
}

module.exports = AuthController;
