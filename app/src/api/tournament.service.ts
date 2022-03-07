import { httpService } from "./config.service";
import { Tournament } from "./types";

// TODO:
// - support query params to the services.
// - setup dark theme
// - override colors based in our design.
// - override font family of MUI
// - create generic components like button, status.
// - do our basic routing.
// - add features.

export interface GetTournamentsResponse {
  data: Tournament[];
  hasNext: boolean;
  hasPrev: boolean;
  page: number;
  limit: number;
  totalCount: number;
}
interface GetTournamentsVariables {
  page?: number;
  limit?: number;
}
export async function getTournaments(
  variables: GetTournamentsVariables = {}
): Promise<GetTournamentsResponse> {
  const res = await httpService.get("/tournaments");
  return res.data;
}
