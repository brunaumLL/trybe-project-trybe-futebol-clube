import { Request, Response } from 'express';
import { sign, verify } from 'jsonwebtoken';
import Users from '../database/models/user.Model';

const secret = process.env.JWT_SECRET || 'secret';

export default class TokenMiddleware {
  static async validate(req: Request, res: Response) {
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).json({ message: 'Token not found' });
    const user = verify(authorization, secret) as Users;
    if (!user) return res.status(401).json({ message: 'Invalid token' });
    return res.status(200).json({ role: user.role });
  }

  static makeToken(payload: { id: number, email: string, role: string }): string {
    const token = sign(payload, secret);
    return token;
  }
}
