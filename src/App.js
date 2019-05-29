import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MediaCard from './MediaCard';

function App() {
const [data, setPosts] = useState([]);

// Make a request 
useEffect(()=> {
  axios
    .get('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then( res => setPosts(res.data));
}, []);

  
  return (
   <MediaCard postData = {data} />
  );
}

export default App;
