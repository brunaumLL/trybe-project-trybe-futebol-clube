import { Router } from 'express';
import LeaderboardController from '../controller/leaderboard.Controller';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', LeaderboardController.getHomeMatches);
leaderboardRouter.get('/away', LeaderboardController.getAwayMatches);

export default leaderboardRouter;
