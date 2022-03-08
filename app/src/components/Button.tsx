import { grayColors } from "components";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";

export type ButtonProps = JSX.IntrinsicElements["button"] & {
  color?: "primary" | "secondary" | "action";
};
export function Button({
  color = "primary",
  className,
  ...otherProps
}: ButtonProps) {
  const classes = useButtonStyles();
  return (
    <button
      className={classNames(
        classes.button,
        className,
        classes[`button__${color}`]
      )}
      {...otherProps}
    />
  );
}

const useButtonStyles = makeStyles({
  button: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "8px 16px",
    backgroundColor: "transparent",
    color: "#fff",
    cursor: "pointer",
    transition: `
background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
    `,
  },
  button__primary: {
    color: "#fff",
    border: `1px solid ${grayColors.main}`,

    "&:hover": {
      border: `1px solid ${grayColors.secondary}`,
    },
  },
  button__secondary: {
    color: "#80BAD6",
    border: "1px solid #80BAD6",
    backgroundColor: "#46E2EC1A",

    "&:hover": {
      border: "1px solid #99c7de",
      backgroundColor: "#195256",
    },
  },
  button__action: {
    color: "#fff",
    border: "1px solid #f2f2f2",

    "&:hover": {
      border: `1px solid ${grayColors.secondary}`,
    },
  },
});
