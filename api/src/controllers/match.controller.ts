import { RequestHandler } from 'express';
import { match, team, tournament } from '../models';

/**
 * This will support different "query paramerters".
 * */
export const getMatches: RequestHandler = (req, res) => {
  const matches = match.findAll();

  const updatedMatches = matches.map((match) => {
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

  res.send(updatedMatches);
};
