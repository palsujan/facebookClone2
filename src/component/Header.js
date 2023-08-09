import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';

const Header = () => {
  return (
    <div className="Header">
        <div className="header_left">
          <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png?w=512&h=512'/>
          <div className="heder_search">
            <SearchIcon/>
            <input type="text" placeholder="Search Feacebook"/>
          </div>
        </div>
        <div className="header_middle">
          <div className="header_option">
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
          
        </div>
    </div>
  )
}

export default Header