import React from 'react';
import  './assets/css/sidebar.css';
import Sidebaroptions from './Sidebaroptions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <Sidebaroptions src="https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I" title="Sujan Pal"/>
        <Sidebaroptions src="https://facebook.com/rsrc.php/v3/yR/r/tInzwsw2pVX.png" title="Covid-19 Information Center"/>
        <Sidebaroptions src='https://static.xx.fbcdn.net/rsrc.php/v3/yQ/r/-UR-mdYpyXa.png' title="Friends"/>
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/NCc4ln3EAaS.png" title="Groups"/>
        <Sidebaroptions src="https://static.xx.fbcdn.net/rsrc.php/v3/yA/r/8L2T81pQAIa.png" title="Watch"/>
        <Sidebaroptions src='https://static.xx.fbcdn.net/rsrc.php/v3/yO/r/XXwl2m1vjqM.png' title="Events"/>
        <Sidebaroptions Icon={ExpandMoreIcon} title="See More"/>
    </div>
  )
}

export default Sidebar;