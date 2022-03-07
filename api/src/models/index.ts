import Model from './Model';
import { Match, Tournament, Team } from './types';

/**
 * Models:
 * - match
 * - participant
 * - tournament
 * */

export const match = new Model<Match>('matches');
export const tournament = new Model<Tournament>('tournaments');
export const team = new Model<Team>('teams');
