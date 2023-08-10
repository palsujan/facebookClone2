import React from 'react';
import  './assets/css/feed.css';
import Storyreel from './Storyreel';
import MessageSender from './MessageSender';

const Feed = () => {
  return (
    <div className='feed'>
        <Storyreel/>
        <MessageSender/>
    </div>
  )
}

export default Feed