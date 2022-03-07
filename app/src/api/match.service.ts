import { httpService } from "./config.service";
import { Match } from "./types";

export interface GetMatchesResponse {
  data: Match[];
  hasNext: boolean;
  hasPrev: boolean;
  page: number;
  limit: number;
  totalCount: number;
}
export async function getMatches(): Promise<GetMatchesResponse> {
  const res = await httpService.get("/matches");
  return res.data;
}
