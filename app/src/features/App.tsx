import { StrictMode } from "react";
import { ErrorBoundary } from "components";
import AppProviders from "./AppProviders";
import { Routes, Route } from "react-router-dom";
import { PageLayout } from "./components";
import Home from "./Home";
import Matches from "./Matches";

export default function App() {
  return (
    <StrictMode>
      <ErrorBoundary>
        <AppProviders>
          <Routes>
            <Route path="/" element={<PageLayout />}>
              <Route index element={<Home />} />
              <Route path="matches" element={<Matches />} />
            </Route>
          </Routes>
        </AppProviders>
      </ErrorBoundary>
    </StrictMode>
  );
}
