import { RequestHandler } from 'express';
import { tournament } from '../models';

export const getTournaments: RequestHandler = (req, res) => {
  const tournaments = tournament.findAll();
  res.send(tournaments);
};
