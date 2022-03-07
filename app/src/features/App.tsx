import { StrictMode } from "react";
import { ErrorBoundary, LogoIcon } from "components";
import AppProviders from "./AppProviders";

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
          <h1>Hello world</h1>
          <LogoIcon />
        </AppProviders>
      </ErrorBoundary>
    </StrictMode>
  );
}
