import Users from '../database/models/user.Model';

export default class UserService {
  static async getByEmail(email: string) {
    const user = await Users.findOne({
      where: { email },
      raw: true,
    });

    return user;
  }
}
