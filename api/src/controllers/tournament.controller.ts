import { RequestHandler } from 'express';
import { tournament } from '../models';
import { Tournament } from '../models/types';
import { PaginatedResults } from '../middleware';

export const getTournaments: RequestHandler = (req, res) => {
  const results = (res as any).paginatedResults as PaginatedResults<Tournament>;
  res.send(results);
};
