import { Request, Response } from 'express';
import UserService from '../service/user.Service';

export default class UserController {
  static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: 'All fields must be filled' });
    const user = await UserService.getByEmail(email);
    if (!user) return res.status(401).json({ message: 'Incorrect email or password' });
    const token = await UserService.makeToken(user);
    return res.status(200).json({ token });
  }
}
