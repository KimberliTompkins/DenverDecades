import React from 'react';
import {  makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow:1,
    },
    hiddenHeader: {
        display: "none",
        textAlign: "center",
        margin: "auto",
        marginTop: 15,
        marginBottom: 15,
        fontSize: 40,
        paddingTop: 50,
        
        [theme.breakpoints.down('sm')]: {
          display: "block"
          
          
          
        }
      }
}))
export default function hiddenHeader() {
    const classes = useStyles();
    return (
        <div>
          <h2 className={classes.hiddenHeader}>Denver through the Decades</h2>
        </div>
        
    )
}
