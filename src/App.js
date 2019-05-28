import React, { useState, useEffect } from 'react';
import axios from 'axios';


function App() {
const [data, setPosts] = useState([]);

// Make a request 
useEffect(()=> {
  axios
    .get('https://private-c3edb-postsmock.apiary-mock.com/posts')
    .then( res => setPosts(res.data));
}, []);

  
  return (
    <div className="App">
      <ul>
        {data.map(item => (
          <li key={`${item.category}${item.id}`} >
            {item.title}
          </li>
        ))}
      </ul>
       
    </div>
  );
}

export default App;
