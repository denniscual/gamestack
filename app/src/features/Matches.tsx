import { Stack, Typography } from "@mui/material";
import FilterTournaments, { ValueType } from "./FilterTournaments";
import { Spinner } from "components";
import { Suspense } from "react";
import { useSearchParams } from "react-router-dom";

export default function Matches() {
  const [searchParams, setSearchParams] = useSearchParams({
    tournament: "ALL",
  }) as any;

  console.log(searchParams.get("tournament"));
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
      <div>
        <div>
          <div>Tournament filter action items</div>
          <div>Filter action items</div>
        </div>
        <div>Matches list</div>
      </div>
    </Stack>
  );
}
