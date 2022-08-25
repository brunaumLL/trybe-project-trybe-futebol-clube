import { Request, Response } from 'express';
import MatchesService from '../service/matches.Service';

export default class MatchesController {
  static async getAll(_req: Request, res: Response) {
    const matches = await MatchesService.getAll();
    return res.status(200).json(matches);
  }
}
