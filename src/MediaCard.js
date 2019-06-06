import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import './style.css'


export default function MediaCard(props){      

  const cardContentStyle = {
    position: 'relative',
    top: '-270px',
  };

  function openPost (postId) {
    props.handlePost(postId);
  }

  return (
      <Grid container>
          {props.postData.map((item) => (
            <Link to={{
              pathname: `/post/${item.id}`,
            }}>
            <Grid key={item.id} item xs={12} md={6} >
              <Card className='card-container'  onClick={() => { openPost(item) }} >
                <CardMedia
                  className='img-container'
                  image= {item.image}
                  title={item.title}
                /> 
                <CardContent style={cardContentStyle} className='text-container' >
                  <Typography className='title-style' variant="h3" >
                    {item.title}
                  </Typography>
                  <Typography className='comments-style'>
                    {item.comments.length} Comments
                  </Typography>
                  <Typography className='descrip-style' >
                    {item.shortDescription}
                  </Typography>
                  <Typography className='categ-style'>
                    {item.category}
                  </Typography>
                </CardContent>
              </Card>  
            </Grid>
            </Link>
          ))} 
      </Grid>    
  );
}
