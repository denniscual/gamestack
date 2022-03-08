import { Stack, Typography } from "@mui/material";
import { Button } from "components";

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
        <Stack direction="row">
          <Button>
            <Typography
              component="span"
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              All Tournaments
            </Typography>
          </Button>
          <Button color="secondary">
            <Typography
              component="span"
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              All Tournaments
            </Typography>
          </Button>
          <Button color="action">
            <Typography
              component="span"
              variant="body1"
              sx={{
                fontWeight: "bold",
              }}
            >
              All Tournaments
            </Typography>
          </Button>
        </Stack>
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
