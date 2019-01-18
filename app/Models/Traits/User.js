class User {
  register(Model) {
    Model.findUser = function findUser(name /* , password */) {
      const query = this.query();
      /* if (name && password) {
        query.where('name', `${name}`).andWhere('password', `${password}`);
      } */
      if (name) {
        query.where('name', `${name}`);
      }
      return query.fetch();
    };
  }
}

module.exports = User;
