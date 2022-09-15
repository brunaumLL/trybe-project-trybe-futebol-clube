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

  static async finishMatche(id: number) {
    await Matches.update({ inProgress: false }, { where: { id } });
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

  static async existTeam(homeTeam: string, awayTeam: string) {
    if (homeTeam === awayTeam) {
      return { status: 401, message: 'It is not possible to create a match with two equal teams' };
    }

    const home = await Teams.findOne({
      where: { id: homeTeam },
    });

    const away = await Teams.findOne({
      where: { id: awayTeam },
    });

    if (!home || !away) return { status: 404, message: 'There is no team with such id!' };

    return { homeTeam, awayTeam };
  }

  static async editMatche(id: number, homeTeamGoals: number, awayTeamGoals: number) {
    await Matches.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
  }
}
