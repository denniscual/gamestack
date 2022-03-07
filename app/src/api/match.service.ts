import { httpService } from "./config.service";
import { Match } from "./types";
import queryString from "query-string";

export interface GetMatchesResponse {
  data: Match[];
  hasNext: boolean;
  hasPrev: boolean;
  page: number;
  limit: number;
  totalCount: number;
}
interface GetMatchesVariables {
  page?: number;
  limit?: number;
  q?: string;
}

export async function getMatches(
  variables: GetMatchesVariables
): Promise<GetMatchesResponse> {
  const query = queryString.stringify(variables);
  const res = await httpService.get(`/matches?${query}`);
  return res.data;
}
