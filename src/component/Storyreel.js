import React from 'react';
import  './assets/css/storyreel.css';
import { Avatar } from '@material-ui/core';

const Storyreel = () => {
  return (
    <div className='storyReel'>
        <div className="story" style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoBEG-IdB10lMUp7RgBKCMhhdA-2-e_bMIjdK5XNr&s')`}}>
            <Avatar/>
            <h4>Sujan Pal</h4>
        </div>
        <div className="story" style={{backgroundImage: `url('https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80')`}}>
            <Avatar/>
            <h4>Sujan Pal</h4>
        </div>
        <div className="story" style={{backgroundImage: `url('https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000')`}}>
            <Avatar/>
            <h4>Sujan Pal</h4>
        </div>
        <div className="story" style={{backgroundImage: `url('https://i.pinimg.com/236x/cc/e0/78/cce078329ede2e53f7dde2d205e93c79.jpg')`}}>
            <Avatar/>
            <h4>Sujan Pal</h4>
        </div>
    </div>
  )
}

export default Storyreel