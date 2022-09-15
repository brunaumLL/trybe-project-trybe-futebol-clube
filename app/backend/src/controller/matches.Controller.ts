import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import Users from '../database/models/user.Model';
import MatchesService from '../service/matches.Service';

const secret = process.env.JWT_SECRET || 'secret';

export default class MatchesController {
  static async getAll(_req: Request, res: Response) {
    const matches = await MatchesService.getAll();
    return res.status(200).json(matches);
  }

  static async finishMatche(req: Request, res: Response) {
    const { id } = req.params;
    await MatchesService.finishMatche(Number(id));
    return res.status(200).json({ message: 'Finished' });
  }

  static async progressMatche(req: Request, res: Response) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
    const { authorization } = req.headers;
    if (!authorization) return res.status(400).json({ message: 'Token not found' });
    try {
      verify(authorization, secret) as Users;
    } catch (e) {
      return res.status(401).json({ message: 'Token must be a valid token' });
    }
    const exist = await MatchesService.existTeam(homeTeam, awayTeam);
    if (exist.message) return res.status(exist.status).json({ message: exist.message });
    const matches = await MatchesService.progressMatche(
      homeTeam,
      awayTeam,
      homeTeamGoals,
      awayTeamGoals,
    );
    return res.status(201).json(matches);
  }

  static async editMatche(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    await MatchesService.editMatche(Number(id), homeTeamGoals, awayTeamGoals);
    return res.status(200).json({ message: 'Updated' });
  }
}
