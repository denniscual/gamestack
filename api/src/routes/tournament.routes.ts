import { Express } from 'express';
import * as tournamentController from '../controllers/tournament.controller';

export default function routes(app: Express) {
  app.get('/api/tournaments', tournamentController.getTournaments);
}
