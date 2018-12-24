const Database = use('Database');

class AuthController {
  async login({ request }) {
    const indata = request.only(['fuser', 'fpass']);
    const user = await Database.select('*')
      .from('tuser')
      .leftJoin('trole', 'tuser.fidrole_fk', 'trole.fidrole')
      .where('fuser', '=', `${indata.fuser}`)
      .andWhere('fpassword', `${indata.fpass}`);
    /* if (user[0]) {
      return true;
    }
    return false; */
    if (user[0]) return user[0].frole;
    return 'anonimous';
  }

  async registrar({ request }) {
    const indata = request.only(['fuser', 'fpass', 'fpass1']);
    if (indata.fpass !== indata.fpass1) return 0;
    const userId = await Database.table('tuser').insert({ fuser: `${indata.fuser}`, fpassword: `${indata.fpass}` });
    return userId;
  }
}

module.exports = AuthController;
