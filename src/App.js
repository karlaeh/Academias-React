import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';
import Container from '@material-ui/core/Container';

function App() {
const [data, setPosts] = useState([]);

// Make a request 
useEffect(()=> {
  axios
    .get('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then( res => setPosts(res.data));
}, []);

  
  return (
    <Container>
      <MediaCard postData = {data} />
    </Container>
  );
}

export default App;
