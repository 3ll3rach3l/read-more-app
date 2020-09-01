import React from 'react';
import {Button} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

//hook
const colors = {
  text: "black",
  background: "rgb(244, 241, 234)",
  backgroundHover: "rgb(237, 230, 214)",
};

const useStyles = makeStyles({
  root: {
    color: colors.text,
    backgroundColor: colors.background,
    "&:hover": {
        backgroundColor: colors.backgroundHover

    }
  },
});


function AuthSubmitButton(props){
    const classes= useStyles();
    return(
        <Button
        classes={classes}
        type="submit" 
        variant="outlined" 
        size="large"
        {...props}
        />
    )
}

export default AuthSubmitButton