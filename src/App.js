import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import axios from 'axios';
import MediaCard from './MediaCard';
import Container from '@material-ui/core/Container';
import Header from './Header';
import AddPost from './AddPost';
import FilterPosts from './FilterPosts';
import FullPost from './FullPost';

function App() {
const [data, setPosts] = useState([]);
const [filterPost, setFilterPost] = useState('all');
const [openPost, setFullPost] = useState();

// Make a request 
useEffect(()=> {
  axios
    .get('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then( res => setPosts(res.data));
}, []);


function addNewPost ( newPost ) {
  setPosts([...data, newPost]);
};

function setFilter ( filter ) { 
  setFilterPost( filter )
};


function setOpen ( openPost ) { 
  setFullPost( openPost )
};

  
  return (
    <Router>
       <Route path="/" exact render={ () =>
        <Container>
          <Header />
          <FilterPosts handleFilter = {setFilter}   /> 
          <MediaCard handlePost={setOpen} postData = {data.filter(item => {
            if (filterPost === 'all'){
              return true 
            } else {return item.category === filterPost}}
            )}  />
          <AddPost handleNewPost = {addNewPost} />
          </Container>
        } />  
      <Route path='/post/:id' render={ () => <FullPost postOpen = { openPost } /> 
      } />
    </Router>

  );
}

export default App;
