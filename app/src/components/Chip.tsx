import { makeStyles } from "@mui/styles";
import { ReactNode } from "react";
import classNames from "classnames";
import { Typography } from "@mui/material";

interface ChipProps {
  label: ReactNode;
  color?: "success" | "action";
}
export function Chip({ label, color = "success" }: ChipProps) {
  const classes = useChipStyles();
  return (
    <div className={classNames(classes.chip, classes[`chip__${color}`])}>
      <Typography
        component="span"
        variant="caption"
        sx={{
          fontWeight: 500,
        }}
      >
        {label}
      </Typography>
    </div>
  );
}

const useChipStyles = makeStyles({
  chip: {
    display: "inline-block",
    padding: "0px 4px",
    textTransform: "uppercase",
    borderRadius: 4,
  },
  chip__success: {
    border: "1px solid #27AE60",
    color: "#27AE60",
  },
  chip__action: {
    border: "1px solid #fff",
    color: "#fff",
  },
});
