import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

class Authenticate {
  /**
     * Generates user tokens
     * @param {int} id
     * @param {string} email
     * @returns {string} token
     */
  static generateToken(id, email) {
    const token = jwt.sign(
      {
        userId: id, email
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '7d'
      }
    );
    return token;
  }
}

export default Authenticate;
