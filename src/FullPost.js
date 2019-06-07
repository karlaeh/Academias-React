import React from 'react';
import Header from './Header';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import './style.css'

const useStyles = makeStyles(theme => ({
  absolute: {
    position: 'fixed',
    top: '120px',
    left: '20px',
    backgroundColor: 'coral',
    color: 'white',
  },
  menu: {
    width: '100%',
  }
}));


export default function FullPost ( props ) {
  const classes = useStyles();

  return (
    <div>
    <Header />
    <Grid container>
    <Grid item xs={12}>
      <Card>
        <CardMedia
            component="img" 
            height="600px"
            src={props.postOpen.image}
        />
        <CardContent>
          <Typography component="h2">
            {props.postOpen.title}
          </Typography>
          <Typography  color="textSecondary" component="p">
            {props.postOpen.description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </Grid>
  <Link to="/"> 
      <Fab title="Back" aria-label="Back" className={classes.absolute} >
        <HomeIcon />
      </Fab>
  </Link>
  </div>
  );
}