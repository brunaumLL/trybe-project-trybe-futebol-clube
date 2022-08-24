import { Request, Response } from 'express';
import TeamsService from '../service/teams.Service';

export default class TeamsController {
  static async getAll(_req: Request, res: Response) {
    const team = await TeamsService.getAll();
    return res.status(200).json(team);
  }

  static async getById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await TeamsService.getById(Number(id));
    return res.status(200).json(team);
  }
}
