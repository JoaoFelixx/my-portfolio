import { Link } from 'react-router-dom';
import { useSelectorSettings } from 'Context/SettingsProvider';
import { localizedStrings } from '../../constants';
import { Nav, SideBtn, CloseBtn, Preferences, } from './style';
import { Switch } from '../Buttons';
import { toast } from 'react-toastify';
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen, AiFillLike } from 'react-icons/ai';

function Sidenav() {
  const { dispatch, sideNavIsOpen } = useSelectorSettings();

  const closeSideNav = () => dispatch?.({ sideNavIsOpen: false });
  
  const sendMessage = () => {
    const API_WHATS_APP = 'https://api.whatsapp.com/send/?phone=5513997173668&text';
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 18)
      return window.location.assign(API_WHATS_APP);

    toast.error(localizedStrings.outOfOfficeHours);
  }

  return (
    <Nav sideNavIsOpen={sideNavIsOpen}>
      <CloseBtn onClick={closeSideNav}> &times; </CloseBtn>

      <Link style={{ textDecoration: 'none' }} to='/' onClick={closeSideNav}>
        <SideBtn>
          <FaHome />
          <p>{localizedStrings.home}</p>
        </SideBtn>
      </Link>
      <Link style={{ textDecoration: 'none' }} to='/projects' onClick={closeSideNav}>
        <SideBtn>
          <AiOutlineFundProjectionScreen />
          <p>{localizedStrings.projects}</p>
        </SideBtn>
      </Link>
      <a style={{ textDecoration: 'none' }} href='#Contact' onClick={closeSideNav}>
        <SideBtn >
          <AiFillLike />
          <p>{localizedStrings.contact}</p>
        </SideBtn>
      </a>
      <SideBtn onClick={sendMessage}>
        <FaLaptopCode />
        <p>{localizedStrings.wantAWebSite}</p>
      </SideBtn>

      <Preferences>
        <p style={{ fontSize: '20px', color: 'white' }}>{localizedStrings.defineTheme} </p>
        <Switch />
      </Preferences>
    </Nav>
  )
}

export default Sidenav;