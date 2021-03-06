import React from "react";
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//hook
const colors = {
  text: "black",
  background: "rgb(244, 241, 234)",
  labelFocus: "rgb(249, 249, 249)",
  borderFocus: "rgb(204, 204, 204)"
};
// border: 1px solid #ccc; rgbToHex(204, 204, 204)
const useStyles = makeStyles({
  root: {
    marginBottom: "20px",
    "& label": {
      color: colors.text,
    },
    "& input": {
      color: colors.text,
      fontSize: "16px",
    },
    "& input:focus": {
      color: colors.text,
      fontSize: "16px",
      background: colors.labelFocus,
      border: "1px solid rgb(204, 204, 204)",
    },
    "& label.MuiInputBase-root": {
      color: colors.labelFocus,
    },
  },
});

function AuthTextField(props) {
  const classes = useStyles();
  return (
    <TextField
      classes={classes}
      variant="outlined"
      {...props}
    />
  );
}

export default AuthTextField;
