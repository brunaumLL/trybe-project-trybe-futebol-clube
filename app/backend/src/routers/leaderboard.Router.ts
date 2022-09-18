import { Router } from 'express';
import LeaderboardController from '../controller/leaderboard.Controller';

const leaderboardRouter = Router();

leaderboardRouter.get('/home', LeaderboardController.getHomeMatches);

export default leaderboardRouter;
