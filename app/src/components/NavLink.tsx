import { useResolvedPath, useMatch, Link, LinkProps } from "react-router-dom";
import { Typography, useTheme } from "@mui/material";
import { grayColors } from "./theme";

export function NavLink({ to, children, ...otherProps }: LinkProps) {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  const isMatched = Boolean(match);
  const theme = useTheme();

  return (
    <Link
      to={to}
      {...otherProps}
      style={{
        textDecoration: "none",
      }}
    >
      <Typography
        variant="body1"
        style={{
          textTransform: "uppercase",
          fontWeight: isMatched ? 600 : "normal",
          color: isMatched ? "#fff" : grayColors.secondary,
          borderBottom: isMatched
            ? `2px solid ${theme.palette.primary.main}`
            : undefined,
        }}
      >
        {children}
      </Typography>
    </Link>
  );
}
