import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';
import Container from '@material-ui/core/Container';
import Header from './Header';
import AddPost from './AddPost';

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
      <Header />
      <MediaCard postData = {data} />
      <AddPost getSrc = {data.map(item => (item.image))} />
    </Container>
  );
}

export default App;
