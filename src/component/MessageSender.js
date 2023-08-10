import { Avatar } from '@material-ui/core';
import  './assets/css/messageSender.css';
import React from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
const MessageSender = () => {
  return (
    <div className='messageSender'>
        <div className='messageSender_top'>
        <Avatar src='https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I'/>
            <form>
                <input type='text' placeholder="What's on you mind Sujan?"/>

            </form>
        </div>
        <div className='messageSender_bottom'>
            <div className="messangerOptions">
                <VideoCallIcon style={{color:'red'}} fontSize='large'/>
                <p>Live Video</p>
            </div>
            <div className="messangerOptions">
                <PhotoLibraryIcon style={{color:'lightgreen'}} fontSize='large'/>
                <p>Photo/Video</p>
            </div>
            <div className="messangerOptions">
                <EmojiEmotionsIcon style={{color:'#ffb100'}} fontSize='large'/>
                <p>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}

export default MessageSender