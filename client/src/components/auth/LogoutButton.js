import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/actions/auth';
import Cookies from 'js-cookie';
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const colors = {
  text: "black",
  background: "rgb(244, 241, 234)",
  backgroundHover: "rgb(237, 230, 214)",
};

const useStyles = makeStyles({
  root: {
    textTransform: "none",
    fontWeight: "normal",
    fontSize: "16px",
    padding: "12 24",
    borderRadius: "3px",
    color: colors.text,
    backgroundColor: colors.background,
    "&:hover": {
      backgroundColor: colors.backgroundHover,
    },
  },
});

function LogoutButton(props) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const handleClick = async (e) => {
        const res = await dispatch(logout())
        //debugger
        if (res.ok) Cookies.remove('token')
       
       // console.log("this is res in logoutbutton.js", res)
            
    }

  return (
    <div id="logout-button">
      <Button 
      onClick={handleClick}
      classes={classes}
      type="click"
      variant="outlined"
      size="small"
      {...props}
      />
    </div>
  );
}

export default LogoutButton;
