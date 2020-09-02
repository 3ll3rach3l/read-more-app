import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
//import { loginDemo } from '../store/'
//import {useDispatch} from 'react-redux';

//const dispatch = useDispatch()

//hook
const colors = {
    text: "black",
    background: "rgb(244, 241, 234)",
    backgroundHover: "rgb(237, 230, 214)",
};

const useStyles = makeStyles({
    root: {
        textTransform: 'none',
        fontWeight: 'normal',
        fontSize: '16px',
        padding: "12px 24px",
        borderRadius: "3px",
        color: colors.text,
        backgroundColor: colors.background,
        "&:hover": {
            backgroundColor: colors.backgroundHover,
        },

    },
});

// const handleSubmitDemo = e => {
    
//     e.preventDefault()
//     dispatch(loginDemo())

// }


function DemoSubmitButton(props) {
    const classes = useStyles();
    return (
        <Button
            //onClick={handleSubmitDemo}
            classes={classes}
            type="click"
            variant="outlined"
            size="small"
            {...props}
        />
    )
}

export default DemoSubmitButton