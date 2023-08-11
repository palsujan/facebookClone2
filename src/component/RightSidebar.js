import React from 'react'
import  './assets/css/rightSidebar.css';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import VideocamIcon from '@material-ui/icons/Videocam';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
const RightSidebar = () => {
  return (
    <div className='widget'>
        <div className="widget_header">
          <div className="widget_header_left">
            <h4>Your Pages</h4>
          </div>
          <MoreHorizIcon/>
        </div>
        <div className="widget_body">
          <div className="widget_bodyOptions">
            <Avatar src='https://scontent.fixa1-1.fna.fbcdn.net/v/t39.30808-6/353372763_2472167982943532_6504220203433666466_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=TEkYbepExdUAX_WrfMN&_nc_ht=scontent.fixa1-1.fna&oh=00_AfBDq_e416AeQJm8jFAVxt2b2VWxW_4QEotKK-fO2zQJoQ&oe=64DAA7E5'/>
            <h4>micirtains</h4>
          </div>
          <div className="widget_bodyOptions m10">
            <NotificationsNoneIcon/>
            <p>1 Notification</p>
          </div>
          <div className="widget_bodyOptions m10">
            <VolumeUpIcon/>
            <p>Create promotion</p>
          </div>
        </div>
        <hr/>

        <div className="widget_header">
          <div className="widget_header_left">
            <h4>Contacts</h4>
          </div>
          <div className="widget_header_Right">
              <VideocamIcon/>
              <SearchIcon/>
              <MoreHorizIcon/>
          </div>
        </div>

        <div className="widget_body">
          <div className="widget_bodyOptions">
          <Avatar src='https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I'/>
            <h4>Sujan Pal</h4>
          </div>

          <div className="widget_bodyOptions">
            <Avatar src='https://scontent.fixa1-1.fna.fbcdn.net/v/t39.30808-6/354881956_242119278540881_4308392631649001362_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=KjAb3l5BCOgAX9QmYHM&_nc_ht=scontent.fixa1-1.fna&oh=00_AfAsDjk_d40uRKwNDQxIfh7QqJ643yq2qXguSVUf7bQXlw&oe=64D9AEFC'/>
            <h4>Simu Datta</h4>
          </div>
          <div className="widget_bodyOptions">
            <Avatar src='https://scontent.fixa1-1.fna.fbcdn.net/v/t39.30808-6/350789518_267890708978012_6104062639515381560_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=3z5Ww9-fUBwAX_AXRXL&_nc_ht=scontent.fixa1-1.fna&oh=00_AfBIvDA7D6W_DbTOj-mUMNq2je4f2A77NkDRzQz45euZ-g&oe=64D94424'/>
            <h4>Rajib Debnath</h4>
          </div>
          <div className="widget_bodyOptions">
            <Avatar src='https://media.licdn.com/dms/image/D5603AQHQnG_sVr8DSg/profile-displayphoto-shrink_400_400/0/1674574865256?e=1696464000&v=beta&t=9dCKhN0peLa6jRunfDj2wpa7rYsXZ7BXLnbvDdyTm8I'/>
            <h4>Sujan Pal</h4>
          </div>
          <div className="widget_bodyOptions">
          <Avatar src='https://scontent.fixa1-1.fna.fbcdn.net/v/t39.30808-6/354881956_242119278540881_4308392631649001362_n.jpg?_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=KjAb3l5BCOgAX9QmYHM&_nc_ht=scontent.fixa1-1.fna&oh=00_AfAsDjk_d40uRKwNDQxIfh7QqJ643yq2qXguSVUf7bQXlw&oe=64D9AEFC'/>
            <h4>Simu Datta</h4>
          </div>
          <div className="widget_bodyOptions">
          <Avatar src='https://scontent.fixa1-1.fna.fbcdn.net/v/t39.30808-6/350789518_267890708978012_6104062639515381560_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=be3454&_nc_ohc=3z5Ww9-fUBwAX_AXRXL&_nc_ht=scontent.fixa1-1.fna&oh=00_AfBIvDA7D6W_DbTOj-mUMNq2je4f2A77NkDRzQz45euZ-g&oe=64D94424'/>
            <h4>Rajib Debnath</h4>
          </div>

        </div>

    </div>
  )
}

export default RightSidebar