import Matches from '../database/models/matches.Model';
import TeamsService from './teams.Service';
import LeaderboardConfig from '../utils/LeaderboardConfig';
import { ILeaderboard } from '../interfaces/ILeaderboards';

export default class LeaderboardService {
  static async getAllHomeGames(): Promise<ILeaderboard[]> {
    const teams = await TeamsService.getAll();
    const matches = await Promise.all(teams.map(async (team) => {
      const homeMatches = await Matches
        .findAll({ where: { homeTeam: team.id, inProgress: false } });
      return {
        name: team.teamName,
        totalPoints: LeaderboardConfig.totalPoints(homeMatches),
        totalGames: homeMatches.length,
        totalVictories: LeaderboardConfig.homeVictories(homeMatches),
        totalDraws: LeaderboardConfig.draws(homeMatches),
        totalLosses: LeaderboardConfig.awayVictories(homeMatches),
        goalsFavor: LeaderboardConfig.goalsHome(homeMatches),
        goalsOwn: LeaderboardConfig.goalsAway(homeMatches),
        goalsBalance: LeaderboardConfig.balance(homeMatches),
        efficiency: LeaderboardConfig.efficiency(homeMatches),
      };
    }));

    return LeaderboardConfig.sortGamesResult(matches);
  }

  static async getAllAwayGames(): Promise<ILeaderboard[]> {
    const teams = await TeamsService.getAll();
    const matches = await Promise.all(teams.map(async (team) => {
      const awayMatches = await Matches
        .findAll({ where: { awayTeam: team.id, inProgress: false } });
      return {
        name: team.teamName,
        totalPoints: LeaderboardConfig.totalPointsWhenAway(awayMatches),
        totalGames: awayMatches.length,
        totalVictories: LeaderboardConfig.awayVictories(awayMatches),
        totalDraws: LeaderboardConfig.draws(awayMatches),
        totalLosses: LeaderboardConfig.homeVictories(awayMatches),
        goalsFavor: LeaderboardConfig.goalsAway(awayMatches),
        goalsOwn: LeaderboardConfig.goalsHome(awayMatches),
        goalsBalance: LeaderboardConfig.balanceWhenAway(awayMatches),
        efficiency: LeaderboardConfig.efficiencyWhenAway(awayMatches),
      };
    }));

    return LeaderboardConfig.sortGamesResult(matches);
  }
}
