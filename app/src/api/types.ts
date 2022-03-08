// ---- Common Types ----- /

export type ID = number;

export interface Image {
  id: ID;
  type: "default" | "small" | "large" | "square";
  url: string;
  thumbnail: string;
}

interface Link {
  website: string | null;
  wiki: string;
}

// ---- Models ----- /

export interface Match {
  id: ID;
  title: string;
  start: string;
  end: string;
  streamed: boolean;
  tournament: Tournament;
  participants: Participant[];
}

export interface Participant {
  seed: number;
  score: number;
  winner: boolean;
  team: Team;
}

export interface Team {
  id: ID;
  name: string;
  abbreviation: string;
  images: Image[];
}

export interface Tournament {
  id: ID;
  title: string;
  short_title: string;
  tier: number;
  links: Link;
  images: Image[];
}
