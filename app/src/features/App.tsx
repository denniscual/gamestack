import { StrictMode } from "react";
import { ErrorBoundary, LogoIcon } from "components";
import AppProviders from "./AppProviders";
import { Paper, Button } from "@mui/material";

// TODO:
// - override colors based in our design.
// - override font family of MUI
// - create generic components like button, status.
// - do our basic routing.
// - add features.

export default function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <AppProviders>
          <Paper
            sx={{
              bgColor: "primary.light",
            }}
          >
            <h1>Hello world</h1>
            <Button color="primary" variant="outlined">
              Outlined
            </Button>
          </Paper>

          <LogoIcon />
        </AppProviders>
      </ErrorBoundary>
    </StrictMode>
  );
}
