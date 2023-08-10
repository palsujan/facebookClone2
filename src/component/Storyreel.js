import React from 'react';
import  './assets/css/storyreel.css';
import { Avatar } from '@material-ui/core';

const Storyreel = () => {
  return (
    <div className='storyReel'>
        <div className="story" style={{backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvoBEG-IdB10lMUp7RgBKCMhhdA-2-e_bMIjdK5XNr&s')`}}>
        <Avatar src='https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I'/>
            <h4>Sujan Pal</h4>
        </div>
        <div className="story" style={{backgroundImage: `url('https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG8lMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww&w=1000&q=80')`}}>
            <Avatar src='https://scontent.fixa1-1.fna.fbcdn.net/v/t39.30808-6/354881956_242119278540881_4308392631649001362_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=KjAb3l5BCOgAX9QmYHM&_nc_ht=scontent.fixa1-1.fna&oh=00_AfAsDjk_d40uRKwNDQxIfh7QqJ643yq2qXguSVUf7bQXlw&oe=64D9AEFC'/>
            <h4>Simu Datta</h4>
        </div>
        <div className="story" style={{backgroundImage: `url('https://img.freepik.com/free-photo/beautiful-view-greenery-bridge-forest-perfect-background_181624-17827.jpg?w=2000')`}}>
            <Avatar src='https://scontent.fixa1-1.fna.fbcdn.net/v/t39.30808-6/350789518_267890708978012_6104062639515381560_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=3z5Ww9-fUBwAX_AXRXL&_nc_ht=scontent.fixa1-1.fna&oh=00_AfBIvDA7D6W_DbTOj-mUMNq2je4f2A77NkDRzQz45euZ-g&oe=64D94424'/>
            <h4>Rajib Debnath</h4>
        </div>
        <div className="story" style={{backgroundImage: `url('https://i.pinimg.com/236x/cc/e0/78/cce078329ede2e53f7dde2d205e93c79.jpg')`}}>
            <Avatar/>
            <h4>Sujan Pal</h4>
        </div>
    </div>
  )
}

export default Storyreel