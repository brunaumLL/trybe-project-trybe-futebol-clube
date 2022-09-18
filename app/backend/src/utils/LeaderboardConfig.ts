import { ILeaderboard } from '../interfaces/ILeaderboards';
import Matches from '../database/models/matches.Model';

export default class LeaderboardConfig {
  static goalsHome(matches: Matches[]): number {
    const goalsFavor = matches
      .map((match) => match.homeTeamGoals).reduce((prev, curr) => prev + curr, 0);
    return goalsFavor;
  }

  static goalsAway(matches: Matches[]): number {
    const goalsFavor = matches
      .map((match) => match.awayTeamGoals).reduce((prev, curr) => prev + curr, 0);
    return goalsFavor;
  }

  static homeVictories(matches: Matches[]): number {
    const totalVictories = matches
      .filter((match) => match.homeTeamGoals > match.awayTeamGoals).length;
    return totalVictories;
  }

  static awayVictories(matches: Matches[]): number {
    const totalLosses = matches
      .filter((match) => match.homeTeamGoals < match.awayTeamGoals).length;
    return totalLosses;
  }

  static draws(matches: Matches[]): number {
    const totalDraws = matches
      .filter((match) => match.homeTeamGoals === match.awayTeamGoals).length;
    return totalDraws;
  }

  static totalPoints(matches: Matches[]): number {
    const victories = this.homeVictories(matches);
    const draws = this.draws(matches);
    return (victories * 3) + draws;
  }

  static totalPointsWhenAway(matches: Matches[]): number {
    const victories = this.awayVictories(matches);
    const draws = this.draws(matches);
    return (victories * 3) + draws;
  }

  static balance(matches: Matches[]): number {
    const favor = this.goalsHome(matches);
    const own = this.goalsAway(matches);
    return favor - own;
  }

  static balanceWhenAway(matches: Matches[]): number {
    const favor = this.goalsAway(matches);
    const own = this.goalsHome(matches);
    return favor - own;
  }

  static efficiency(matches: Matches[]): string {
    const points = this.totalPoints(matches);
    const eff = ((points / (matches.length * 3)) * 100);
    return eff.toFixed(2);
  }

  static efficiencyWhenAway(matches: Matches[]): string {
    const points = this.totalPointsWhenAway(matches);
    const eff = ((points / (matches.length * 3)) * 100);
    return eff.toFixed(2);
  }

  static sortGamesResult(games: ILeaderboard[]): ILeaderboard[] {
    return games
      .sort((a, b) => b.totalPoints - a.totalPoints
          || b.totalVictories - a.totalVictories
          || b.goalsBalance - a.goalsBalance
          || b.goalsFavor - a.goalsFavor
          || a.goalsOwn - b.goalsOwn);
  }
}
