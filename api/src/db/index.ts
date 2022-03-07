// @ts-nocheck - may need to be at the start of file

import fs from 'fs';
import path from 'path';

const jsonPath = path.join(__dirname, '..', '..', '..', 'data.json');
const jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

const matches = jsonData.data.map((match) => {
  return {
    id: match.id,
    title: match.title,
    start: match.start,
    end: match.end,
    streamed: match.streamed,
    tournament: match.tournament.id,
    participants: match.participants.map((part) => ({
      seed: part.seed,
      score: part.score,
      winner: part.winner,
      team: part.team.id,
    })),
  };
});

const tournaments = Object.values(
  jsonData.data.reduce((acc, value) => {
    const { tournament } = value;
    acc[tournament.id] = {
      id: tournament.id,
      title: tournament.title,
      short_title: tournament.short_title,
      tier: tournament.tier,
      links: tournament.links,
      images: tournament.images,
    };
    return acc;
  }, {}),
);

const teams = Object.values(
  jsonData.data.reduce((acc, value) => {
    value.participants.forEach((participant) => {
      const { team } = participant;
      acc[team.id] = {
        id: team.id,
        name: team.name,
        abbreviation: team.abbreviation,
        images: team.images,
      };
    });
    return acc;
  }, {}),
);

const db = {
  matches,
  tournaments,
  teams,
};

export default db;
