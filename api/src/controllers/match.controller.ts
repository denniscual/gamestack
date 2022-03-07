import { RequestHandler } from 'express';
import { team, tournament } from '../models';
import { Match } from '../models/types';
import { PaginatedResults } from '../middleware';

export const getMatches: RequestHandler = (req, res) => {
  const results = (res as any).paginatedResults as PaginatedResults<Match>;

  const updatedMatches = results.data.map((match) => {
    const participantsWithTeam = match.participants.map((participant) => {
      return {
        ...participant,
        team: team.findById(participant.team),
      };
    });
    return {
      ...match,
      participants: participantsWithTeam,
      tournament: tournament.findById(match.tournament),
    };
  });

  res.send({
    ...results,
    data: updatedMatches,
  });
};
