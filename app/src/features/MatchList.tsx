import { getMatches, GetMatchesResponse, GetMatchesVariables } from "api";
import { useQuery } from "react-query";

interface MatchListProps {
  tournamentId?: string;
}
export default function MatchList({ tournamentId }: MatchListProps) {
  const queryVariables = {
    page: 1,
    limit: 10,
    q: tournamentId !== "ALL" ? `tournament:${tournamentId}` : undefined,
  };

  const data = useQuery<GetMatchesResponse, Error, GetMatchesVariables>(
    ["matches", tournamentId],
    () => getMatches(queryVariables)
  ).data as GetMatchesResponse;

  console.log({ data });

  return <div>MatchList</div>;
}
