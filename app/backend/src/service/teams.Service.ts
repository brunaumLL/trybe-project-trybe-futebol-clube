import Teams from '../database/models/teams.Model';

export default class TeamsService {
  static async getAll() {
    const team = await Teams.findAll({
      raw: true,
    });
    return team;
  }

  static async getById(id:number) {
    const team = await Teams.findByPk(id, {
      raw: true,
    });
    return team;
  }
}
