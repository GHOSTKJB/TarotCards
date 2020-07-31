import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TextareaAutosize } from "@material-ui/core";
import Draggable from 'react-draggable';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(16),
        height: theme.spacing(16),
        
      },
    },
    card: {
      backgroundColor: "#d1d1d1",
      width: "350px",
      height: "auto"
    }
  }));

  const Card = ({cardData, deleteCard}) => {
    const classes = useStyles()
    const {header, description} = cardData
    return (
      <Draggable className={classes.root}>
        <Paper style={{backgroundColor:"#03befc"}} varient="outlined" elevation={8} className={classes.card}>
        <DeleteIcon onClick={() => deleteCard(header)}/>
        <h1 > {header} </h1>
        <h2> {description} </h2>
        </Paper>
      </Draggable>
    )
  }
  
  export default Card