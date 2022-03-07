import Model from './Model';
import { Match, Tournament, Team } from './types';

/**
 * Models:
 * - match
 * - participant
 * - tournament
 * */

const match = new Model<Match>('matches');
const tournament = new Model<Tournament>('tournaments');
const team = new Model<Team>('teams');

export { Model, match, tournament, team };
