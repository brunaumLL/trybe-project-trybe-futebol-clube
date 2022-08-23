import { sign } from 'jsonwebtoken';
import Users from '../database/models/user.Model';

const secret = process.env.JWT_SECRET || 'secret';

export default class UserService {
  static async getByEmail(email: string) {
    const user = await Users.findOne({
      where: { email },
      raw: true,
    });

    return user;
  }

  static async makeToken(user: Users) {
    const { password, ...tokenPayload } = user;
    const token = sign({ data: tokenPayload }, secret);
    return token;
  }
}
