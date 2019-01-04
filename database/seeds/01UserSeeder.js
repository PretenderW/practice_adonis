const User = use('App/Models/User');
class UserSeeder {
  async run() {
    await User.query().delete();

    const users = [
      { name: 'Ivanov', role: 1, password: 'ivan' },
      { name: 'Petrov', password: 'petr' },
      { name: 'Sidorov', role: 0, password: 'sid' }
    ];

    await User.createMany(users);
  }
}

module.exports = UserSeeder;
