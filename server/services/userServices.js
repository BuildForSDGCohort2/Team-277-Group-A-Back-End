import database from '../models';

const { User } = database;

class UserService {
  static async registerUser(newUser, email) {
    const user = await User.findOrCreate({
      where: { email },
      defaults: newUser
    });
    return user;
  }
}

export default UserService;
