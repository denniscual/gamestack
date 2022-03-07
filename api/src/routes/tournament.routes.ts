import { Express } from 'express';
import * as tournamentController from '../controllers/tournament.controller';
import * as middleware from '../middleware';
import { tournament } from '../models';

export default function routes(app: Express) {
  app.get(
    '/api/tournaments',
    middleware.createPaginateResultsMiddleware(tournament),
    tournamentController.getTournaments,
  );
}
