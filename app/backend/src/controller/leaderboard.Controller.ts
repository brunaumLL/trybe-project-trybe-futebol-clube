import { Request, Response } from 'express';
import LeaderboardService from '../service/leaderboard.Service';

export default class LeaderboardController {
  static async getHomeMatches(req: Request, res: Response) {
    const matches = await LeaderboardService.getAllHomeGames();
    return res.status(200).json(matches);
  }
}
