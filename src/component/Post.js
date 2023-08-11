import React from 'react';
import  './assets/css/post.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PublicIcon from '@material-ui/icons/Public';
import { Avatar } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ShareIcon from '@material-ui/icons/Share';

const Post = ({photoURL, image, userName, timeStamp, message}) => {
  return (
    <div className='post'>
        <div className="post_top">
            <div className="post_topLeft">
                <Avatar src={photoURL}/>
                <div className='postInfo'>
                    <h4>{userName}</h4>
                    <p>{timeStamp} <PublicIcon/></p>
                </div>
            </div>
            <div className="post_topRight">

            </div>
            <MoreHorizIcon/>
        </div>
        <div className="post_middle">
            <p>{message}</p>
            {image && <img src={image}/>}
        </div>
        <div className="post_bottom">
            <div className="post_bottomOptions">
                <ThumbUpAltIcon/> <p>Like</p>
            </div>
            <div className="post_bottomOptions">
                <ChatBubbleOutlineIcon/> <p>Comment</p>
            </div>
            <div className="post_bottomOptions">
                <ShareIcon/> <p>Share</p>
            </div>
        </div>
    </div>
  )
}

export default Post