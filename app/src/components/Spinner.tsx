import { CircularProgress, Stack } from "@mui/material";

export function Spinner() {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      sx={{
        p: 2,
      }}
    >
      <CircularProgress />
    </Stack>
  );
}
