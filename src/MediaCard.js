import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import './style.css'


export default function MediaCard(props){      

  const cardContentStyle = {
    position: 'relative',
    top: '-225px',
  };

  return (
      <Grid container>
          {props.postData.map(item => (
            <Grid item xs={12} sm={6} >
              <Card className='card-container' key={`${item.category}${item.id}`} >
                <CardMedia
                  className='img-container'
                  image= {item.image}
                  title={item.title}
                /> 
                <CardContent style={cardContentStyle} className='text-container' >
                  <Typography className='title-style' variant="h3" >
                    {item.title}
                  </Typography>
                  <Typography variant="p">
                    {item.shortDescription}
                  </Typography>
                </CardContent>
              </Card>  
            </Grid>
          ))} 
      </Grid>    
  );
}
