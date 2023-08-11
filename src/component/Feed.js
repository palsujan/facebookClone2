import React from 'react';
import  './assets/css/feed.css';
import Storyreel from './Storyreel';
import MessageSender from './MessageSender';
import Post from './Post';

const Feed = () => {
  return (
    <div className='feed'>
        <Storyreel/>
        <MessageSender/>
        <Post photoURL="https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I" image="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" userName="Sujan Pal" timeStamp="12:40 PM" message="This is the best picture"/>
        <Post photoURL="" image="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg" userName="Sujan Pal" timeStamp="12:40 PM" message="This is the best picture"/>
    </div>
  )
}

export default Feed