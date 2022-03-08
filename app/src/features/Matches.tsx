import { Stack, Typography } from "@mui/material";
import FilterTournaments, { ValueType } from "./FilterTournaments";
import { Spinner } from "components";
import { Suspense, useState } from "react";

export default function Matches() {
  const [activeTournament, setActiveTournament] = useState<ValueType>("ALL");
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
            value={activeTournament}
            onChange={setActiveTournament}
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
