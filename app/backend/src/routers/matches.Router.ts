import { Router } from 'express';
import MatchesController from '../controller/matches.Controller';

const matchesRouter = Router();

matchesRouter.get('/', MatchesController.getAll);
matchesRouter.post('/', MatchesController.progressMatche);
matchesRouter.patch('/:id/finish', MatchesController.finishMatche);
matchesRouter.patch('/:id', MatchesController.editMatche);

export default matchesRouter;
