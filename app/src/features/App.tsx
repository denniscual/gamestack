import { StrictMode } from "react";
import { ErrorBoundary } from "components";
import AppProviders from "./AppProviders";
import { getTournaments } from "api";

getTournaments().then(console.log);

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
