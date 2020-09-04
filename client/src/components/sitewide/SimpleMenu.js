import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import history from '../../store/history'

const useStyles = makeStyles({
  root: {
    textTransform: "none",
    display: "inline-block",
    fontFamily: "'Lato', 'Helvetica Neue', 'Helvetica', 'sans-serif'",
    color: "rgb(56, 33, 16)",
    fontSize: "16px",
    padding: "0px 30px",
    lineHeight: "50px",
  }
});

export default function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={() => history.push('/')}
        classes={classes}
        {...props}
      >
       Home
      </Button>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        classes={classes}
        {...props}
      >
        My Books
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={(()=> history.push('/mybooks/all'))}> All Books </MenuItem>
        <MenuItem onClick={handleClose}>Want To Read</MenuItem>
        <MenuItem onClick={handleClose}>Finished Reading</MenuItem>
      </Menu>
    </div>
  );
}
