import { Stack, Typography } from "@mui/material";
import FilterTournaments from "./FilterTournaments";
import { Spinner } from "components";

export default function Matches() {
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
        <FilterTournaments />
      </Stack>
      <div>
        <div>
          <div>Tournament filter action items</div>
          <div>Filter action items</div>
        </div>
        <div>
          <Spinner />
        </div>
      </div>
    </Stack>
  );
}
