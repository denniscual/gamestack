import { Stack, Typography } from "@mui/material";
import FilterTournaments, { ValueType } from "./FilterTournaments";
import { Spinner } from "components";
import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";
import MatchList from "./MatchList";

export default function Matches() {
  const [searchParams, setSearchParams] = useSearchParams({
    tournament: "ALL",
  }) as any;

  const tournamentId = searchParams.get("tournament");

  return (
    <Stack gap={3}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography
          variant="h1"
          sx={{
            fontSize: "h5.fontSize",
            fontWeight: "bold",
          }}
        >
          Live In-Play
        </Typography>
        <Suspense fallback={<Spinner />}>
          <FilterTournaments
            value={searchParams.get("tournament")}
            onChange={(val) => setSearchParams({ tournament: val })}
          />
        </Suspense>
      </Stack>
      <Stack gap={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Suspense fallback={<Spinner />}>
            <FilterTournaments
              limit={5}
              onlyIcon
              value={tournamentId}
              onChange={(val) => setSearchParams({ tournament: val })}
            />
          </Suspense>
          <div>Filter action items</div>
        </Stack>
        <div
          style={{
            width: "100%",
          }}
        >
          <Suspense fallback={<Spinner />}>
            <MatchList tournamentId={tournamentId} />
          </Suspense>
        </div>
      </Stack>
    </Stack>
  );
}
