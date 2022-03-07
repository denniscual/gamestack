import { StrictMode } from "react";
import { ErrorBoundary } from "components";
import AppProviders from "./AppProviders";

// TODO:
// - support query params to the services.
// - setup dark theme
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
        </AppProviders>
      </ErrorBoundary>
    </StrictMode>
  );
}
