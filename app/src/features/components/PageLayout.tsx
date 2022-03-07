import { Outlet, Link } from "react-router-dom";
import {
  ErrorBoundary,
  LogoIcon,
  NavLink,
  grayColors,
  GBFlagIcon,
  UserProfileIcon,
} from "components";
import { Suspense, FC } from "react";
import { Stack, Typography } from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DiamondIcon from "@mui/icons-material/Diamond";
import NotificationsIcon from "@mui/icons-material/Notifications";

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
        <ProfileWrapper alignItems="center" direction="row" spacing={3}>
          <ProfileItemLayout>
            <GBFlagIcon />
            <span>EN</span>
            <KeyboardArrowDownIcon />
          </ProfileItemLayout>
          <ProfileItemLayout isEmphasized>
            <DiamondIcon />
            <span>180</span>
          </ProfileItemLayout>
          <ProfileItemLayout>
            <NotificationsIcon />
          </ProfileItemLayout>
          <ProfileAvatarItem />
        </ProfileWrapper>
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

function ProfileAvatarItem() {
  return (
    <ProfileItemLayout>
      <UserProfileIcon />
      <Stack>
        <Typography
          variant="body2"
          component="span"
          sx={{ fontWeight: "bold" }}
        >
          Nick M.
        </Typography>
        <Typography
          variant="caption"
          component="span"
          sx={{ fontWeight: 500 }}
          style={{
            color: grayColors.secondary,
          }}
        >
          sample@test.com
        </Typography>
      </Stack>
      <KeyboardArrowDownIcon />
    </ProfileItemLayout>
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
  padding: "40px 60px 40px 60px",
  flex: 1,
});

const ProfileWrapper = styled(Stack)(({ theme }) => ({
  zIndex: 2,
  position: "relative",
  padding: "40px 60px 40px 20px",
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

const ProfileItemLayout: FC<{ isEmphasized?: boolean; spacing?: number }> = ({
  children,
  isEmphasized = false,
  spacing = 1,
}) => {
  return (
    <Typography
      alignItems="center"
      direction="row"
      spacing={spacing}
      variant="body1"
      sx={{ fontWeight: "bold" }}
      style={{
        color: isEmphasized ? "#fff" : grayColors.secondary,
      }}
      component={Stack}
    >
      {children}
    </Typography>
  );
};
