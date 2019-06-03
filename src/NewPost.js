import React from 'react';
import AddPost from './AddPost';


export default function NewPost ( props ) {

  const [formInput, setFormInput] = useState(emptyPost);

  return (
    <div>
    {console.log(props.posts)}
    </div>
  );
}