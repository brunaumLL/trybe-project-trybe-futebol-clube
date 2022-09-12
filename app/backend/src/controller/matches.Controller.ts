import { Request, Response } from 'express';
import MatchesService from '../service/matches.Service';

export default class MatchesController {
  static async getAll(_req: Request, res: Response) {
    const matches = await MatchesService.getAll();
    return res.status(200).json(matches);
  }

  static async progressMatche(req: Request, res: Response) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).json({ message: 'Invalid token' });
    const matches = await MatchesService.progressMatche(
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
    );
    return res.status(201).json(matches);
  }
}
