import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import "./navbar.scss";

export default function NavBar(){
    return(
  <>
  <div className='navbar'>
    <div className='left'>
      <Link to='/' style={{textDecoration:'none'}}>
      <span>The Network</span>
      </Link>
      <HomeIcon/>
      <DarkModeOutlinedIcon/>
      <GridViewOutlinedIcon/>
      <div className='search'>
      <SearchOutlinedIcon/>
      <input type='text' placeholder='Search...'/>
      </div>
    </div>

    <div className='right'>
      <PersonOutlinedIcon/>
      <EmailOutlinedIcon/>
      <NotificationsOutlinedIcon/>
      <div className='user'>
        <span> James Kamau</span>
      </div>
    </div>

  </div>
  </>
    )
}