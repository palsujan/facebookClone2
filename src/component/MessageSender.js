import { Avatar, IconButton, Modal } from '@material-ui/core';
import  './assets/css/messageSender.css';
import React, {useState} from 'react';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import CloseIcon from '@material-ui/icons/Close';
const MessageSender = () => {
    const [open, setOpen] = useState(true)
const handleClose = () =>{
    setOpen(false);
}
const handleOpen = () =>{
    setOpen(true);
}
  return (
    <>  
        <Modal open={open} onClose={handleClose}>
            <div className="modal_pop">
                <form>
                    <div className="modalHeading">
                        <h3>Create Post</h3>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <div className="modalHeader_top">
                        <Avatar src='https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I'/>
                        <h5>Sujan Pal</h5>
                    </div>
                    <div className="modalBody">
                        <textarea rows="5" placeholder="What's your mind?"></textarea>
                    </div>
                    <div className="modalFooter">
                        <div className="modalFooter_left">
                            <h4>Add to your post</h4>
                        </div>
                        <div className="modalFooter_right">
                            <IconButton>
                                <PhotoLibraryIcon style={{color:'lightgreen'}}/>
                            </IconButton>
                            <IconButton>
                                <VideoCallIcon style={{color:'red'}}/>
                            </IconButton>
                            <IconButton>
                                <EmojiEmotionsIcon style={{color:'#ffb100'}} />
                            </IconButton>
                        </div>
                    </div>
                    <input type='submit' className='post_submit' value="post"/>
                </form>
            </div>
        </Modal>
        <div className='messageSender'>
            <div className='messageSender_top'>
            <Avatar src='https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I'/>
                <form>
                    <input type='text' placeholder="What's on you mind Sujan?" onClick={handleOpen}/>

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
    </>
  )
}

export default MessageSender