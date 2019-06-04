import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';
import Container from '@material-ui/core/Container';
import Header from './Header';
import AddPost from './AddPost';
import FilterPosts from './FilterPosts';

function App() {
const [data, setPosts] = useState([]);

// Make a request 
useEffect(()=> {
  axios
    .get('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then( res => setPosts(res.data));
}, []);

function addNewPost ( newPost ) {
  setPosts([...data, newPost]);
}

/* function addNewFilter ( filter ) {
  const filteredPosts = data.filter( post => {
    post.category === filter ;                                    
    });
} */

  return (
    <Container>
      <Header />
      <FilterPosts /> 
      <MediaCard postData = {data} />
      <AddPost handleNewPost = {addNewPost} />
    </Container>
  );
}

export default App;
