import { Express } from 'express';
import * as matchController from '../controllers/match.controller';
import * as middleware from '../middleware';
import { match } from '../models';

export default function routes(app: Express) {
  app.get(
    '/api/matches',
    middleware.createFilterMatchesMiddleware(match),
    middleware.createPaginateResultsMiddleware(),
    matchController.getMatches,
  );
}
