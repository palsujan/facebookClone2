import React from 'react';
import  './assets/css/sidebar.css';
import Sidebaroptions from './Sidebaroptions';

import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import PeopleIcon from '@material-ui/icons/People';
import EventIcon from '@material-ui/icons/Event';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import GroupsIcon from '@material-ui/icons/Groups2';
// import Groups2Icon from '@mui/icons-material/Groups2';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Sidebaroptions src="https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I" title="Sujan Pal"/>
        <Sidebaroptions src="https://facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="Covid-19 Information Center"/>
        <Sidebaroptions Icon={PeopleIcon} title="Friends"/>
        <Sidebaroptions Icon={PeopleIcon} title="Groups"/>
        <Sidebaroptions Icon={OndemandVideoIcon} title="Watch"/>
        <Sidebaroptions Icon={EventIcon} title="Events"/>
        <Sidebaroptions Icon={ExpandMoreIcon} title="See More"/>
    </div>
  )
}

export default Sidebar;