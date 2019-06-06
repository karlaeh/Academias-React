import React from 'react';
import Header from './Header';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

export default function FullPost ( props ) {
//aqui debe de filtrar el id que llega de media card
console.log(props.postOpen)

  return (
    <div>
    <Header />
    <Grid container>
    <Grid item xs={12}>
      <Card>
        <CardMedia
            component="img" 
            height="500px"
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
  </div>
  );
}