import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';
import Container from '@material-ui/core/Container';
import Header from './Header';
import AddPost from './AddPost';
import FilterPosts from './FilterPosts';

function App() {
const [data, setPosts] = useState([]);
const [filterPost, setFilterPost] = useState('all');

// Make a request 
useEffect(()=> {
  axios
    .get('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then( res => setPosts(res.data));
}, []);


function addNewPost ( newPost ) {
  setPosts([...data, newPost]);
}

function setFilter ( filter ) { 
  setFilterPost( filter )
} 

  return (
    <Container>
      <Header />
      <FilterPosts handleFilter = {setFilter}   /> 
      <MediaCard postData = {data.filter(item => {
        if (filterPost === 'all'){
          return true 
        } else {return item.category === filterPost}}
         )}  
         />
      <AddPost handleNewPost = {addNewPost} />
    </Container>
  );
}

export default App;
