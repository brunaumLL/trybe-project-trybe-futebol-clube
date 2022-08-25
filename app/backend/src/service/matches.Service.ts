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
}
