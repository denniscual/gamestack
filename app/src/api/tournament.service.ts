import { httpService } from "./config.service";
import { Tournament } from "./types";
import queryString from "query-string";

export interface GetTournamentsResponse {
  data: Tournament[];
  hasNext: boolean;
  hasPrev: boolean;
  page: number;
  limit: number;
  totalCount: number;
}
export interface GetTournamentsVariables {
  page?: number;
  limit?: number;
}
export async function getTournaments(
  variables: GetTournamentsVariables = {}
): Promise<GetTournamentsResponse> {
  const query = queryString.stringify(variables);
  const res = await httpService.get(`/tournaments?${query}`);
  return res.data;
}
