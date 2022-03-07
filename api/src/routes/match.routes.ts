import { Express } from 'express';
import * as matchController from '../controllers/match.controller';

export default function routes(app: Express) {
  app.get('/api/matches', matchController.getMatches);
}
