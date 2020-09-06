import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

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
        padding: "12 24",
        borderRadius: "3px",
        display: "block",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInline: "0px",
        lineHeight: "18px",
        margin: "18px 0",
        color: colors.text,
        backgroundColor: colors.background,
        "&:hover": {
            backgroundColor: colors.backgroundHover,
        },

    },
});


function ChallengeButton(props) {
    const classes = useStyles();
    return (
        <Button
            classes={classes}
            type="submit"
            variant="outlined"
            size="small"
            {...props}
        />
    )
}

export default ChallengeButton;