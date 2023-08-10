import React from 'react'
import  './assets/css/header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import AppsIcon from '@material-ui/icons/Apps';
import MessageIcon from '@material-ui/icons/Message';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar, IconButton } from '@material-ui/core';

const Header = () => {
  return (
    <div className="header">
        <div className="header_left">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png?w=100%&h=512'/>
          <div className="header_search">
            <SearchIcon/>
            <input type="text" placeholder="Search Feacebook"/>
          </div>
        </div>
        <div className="header_middle">
          <div className="header_option active">
              <HomeIcon fontSize='large'/>
          </div>
          <div className="header_option">
              <OndemandVideoIcon fontSize='large'/>
          </div>
          <div className="header_option">
              <PeopleIcon fontSize='large'/>
          </div>
          <div className="header_option">
              <SportsEsportsIcon fontSize='large'/>
          </div>
        </div>
        <div className="header_right">
          <div className="header_info">
            <Avatar src='https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I'/>
            <h5>Sujan Pal</h5>
          </div>
          <IconButton>
            <AppsIcon/>
          </IconButton>
          <IconButton>
            <MessageIcon/>
          </IconButton>
          <IconButton>
            <ForumIcon/>
          </IconButton>
          <IconButton>
            <NotificationsIcon/>
          </IconButton>
          <IconButton>
            <ArrowDropDownIcon/>
          </IconButton>
        </div>
    </div>
  )
}

export default Header