import { Outlet, Link } from "react-router-dom";
import { ErrorBoundary, LogoIcon, NavLink, grayColors } from "components";
import { Suspense } from "react";
import { Stack } from "@mui/material";
import { styled } from "@mui/system";

export function PageLayout() {
  return (
    <PageLayoutWrapper>
      <HeaderWrapper
        direction="row"
        // @ts-expect-error Not sure why Material UI didn't properly type this.
        component="header"
      >
        <NavWrapper
          direction="row"
          spacing={8}
          alignItems="center"
          // @ts-expect-error Not sure why Material UI didn't properly type this.
          component="nav"
        >
          <Link to="">
            <LogoIcon />
          </Link>
          <Stack direction="row" spacing={6}>
            <NavLink to="">Home</NavLink>
            <NavLink to="matches">Matches</NavLink>
          </Stack>
        </NavWrapper>
        <ProfileWrapper alignItems="center" direction="row"></ProfileWrapper>
      </HeaderWrapper>
      <main>
        <ErrorBoundary>
          <Suspense fallback={<div>Fetching data...</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </main>
    </PageLayoutWrapper>
  );
}

const PageLayoutWrapper = styled("div")({
  backgroundColor: grayColors.light,
  minHeight: "100vh",
});

const HeaderWrapper = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
}));

const NavWrapper = styled(Stack)({
  padding: "40px 70px",
  flex: 1,
});

const ProfileWrapper = styled(Stack)(({ theme }) => ({
  zIndex: 2,
  position: "relative",
  padding: "40px 70px 40px 20px",
  color: "#fff",
  background: theme.palette.secondary.light,
  // background: theme.sx.. "#192031",

  "&::after": {
    content: '" "',
    position: "absolute",
    display: "block",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: -1,
    background: theme.palette.secondary.light,
    transformOrigin: "top left",
    transform: "skew(-30deg, 0deg)",
  },
}));
