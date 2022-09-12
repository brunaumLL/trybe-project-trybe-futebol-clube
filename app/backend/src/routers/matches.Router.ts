import { Router } from 'express';
import MatchesController from '../controller/matches.Controller';

const matchesRouter = Router();

matchesRouter.get('/', MatchesController.getAll);
matchesRouter.post('/', MatchesController.progressMatche);

export default matchesRouter;
