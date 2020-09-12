import Util from '../utils/response';
import UserService from '../services/userServices';
import Authenticate from '../middleware/auth/authenticate';

const util = new Util();

class UserController {
  static async registerUser(req, res) {
    const reqBody = req.body;
    const { firstName } = reqBody;
    const { lastName } = reqBody;
    const { email } = reqBody;
    const { password } = reqBody;
    const { sex } = reqBody;
    const { dateOfBirth } = reqBody;
    const { address } = reqBody;
    const { phoneNumber } = reqBody;

    const newUser = {
      firstName, lastName, email, password, sex, dateOfBirth, address, phoneNumber
    };
    try {
      const [user, created] = await UserService.registerUser(newUser, email);
      const { id } = user;
      const token = Authenticate.generateToken(id, user.email);
      if (created) {
        const data = {
          user: {
            id,
            firstName,
            lastName,
            email
          },
          token
        };
        util.setSuccess(201, 'User created Successfully!', data);
        return util.send(res);
      }
      util.setError(409, 'User already exist');
      return util.send(res);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(res);
    }
  }
}

export default UserController;
