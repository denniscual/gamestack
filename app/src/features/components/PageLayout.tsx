import { Outlet, Link } from "react-router-dom";

export function PageLayout() {
  return (
    <div>
      Page layout
      <Link to="">Home</Link>
      <Link to="matches">Matches</Link>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
