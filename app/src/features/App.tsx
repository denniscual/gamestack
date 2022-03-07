import { StrictMode } from "react";
import { ErrorBoundary } from "components";
import AppProviders from "./AppProviders";

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
