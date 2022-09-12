import Teams from '../database/models/teams.Model';
import Matches from '../database/models/matches.Model';

export default class MatchesService {
  static async getAll() {
    const matches = await Matches.findAll({
      include: [{ model: Teams,
        as: 'teamHome',
        attributes: ['teamName'],
      }, {
        model: Teams,
        as: 'teamAway',
        attributes: ['teamName'],
      }],
      raw: true,
      nest: true,
    });
    return matches;
  }

  static async progressMatche(
    homeTeam: string,
    awayTeam: string,
    homeTeamGoals: string,
    awayTeamGoals: string,
  ) {
    const matche = await Matches.create({
      homeTeam, awayTeam, homeTeamGoals, awayTeamGoals, inProgress: true });
    return matche;
  }
}
