import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
      maxWidth: 500,
    },
    media: {
      height: 500,
    },
  });


export default function MediaCard(props){      
  const classes = useStyles();
  return (
    <div className="allPosts">
      <ul>
        {props.postData.map(item => (
          <Card className={classes.card} key={`${item.category}${item.id}`} >
            <CardMedia 
              className = {classes.media}
              image= {item.image}
              title={item.title}
            /> 
            <CardContent>
            <Typography gutterBottom variant="h3" component="h2">
                {item.title}
            </Typography>
            <Typography component="h4">
                {item.shortDescription}
            </Typography>
            <Typography component="p">
                {item.description}
            </Typography>
            </CardContent>
          </Card>
        ))}
        </ul>       
    </div>
  );
}
