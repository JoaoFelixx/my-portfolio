import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { localizedStrings } from '../../constants';
import {
  HomeOutlined,
  BookOutlined,
  BulbOutlined,
  LikeOutlined,
  LaptopOutlined,
  FundProjectionScreenOutlined,
} from '@ant-design/icons';
import {
  toggleSideNav,
  toggleTheme,
} from '../../store/actions';
import {
  Nav,
  CloseButton,
  SideButtons,
  PreferencesDiv,
} from './style';
import { SwitchButton } from '../Buttons'

function Sidenav() {
  const API_WHATS_APP = 'https://api.whatsapp.com/send?phone=+5513997173668text=';
  const dispatch = useDispatch();
  const [style, setStyle] = useState({ width: '0' });
  const location = useLocation();
  const {
    theme,
    sidenavIsOpen,
  } = useSelector(state => state);

  const closeSidenav = () => dispatch(toggleSideNav({ sidenavIsOpen: false }));

  const changeTheme = () => {

    const isWhiteOrDarkTheme = theme === 'white' ? 'dark' : 'white';

    const preference = { theme: isWhiteOrDarkTheme };

    dispatch(toggleTheme(preference));
  }

  const sendMessage = () => {
    const hour = new Date().getHours();

    if (hour >= 6 && hour < 12)
      return window.location.assign(API_WHATS_APP + localizedStrings.goodMorning);

    if (hour >= 12 && hour < 18)
      return window.location.assign(API_WHATS_APP + localizedStrings.goodAfternoon);

    toast.error(localizedStrings.outOfOfficeHours);
  }

  useEffect(() => {
    const width = sidenavIsOpen ? { width: '300px' } : { width: '0' };

    setStyle(width);

  }, [sidenavIsOpen])

  return (
    <Nav style={style}>
      <CloseButton onClick={() => closeSidenav()}> &times; </CloseButton>

      <Link style={{ textDecoration: 'none' }} to='/' onClick={() => closeSidenav()}>
        <SideButtons>
          <HomeOutlined />
          {" " + localizedStrings.home}
        </SideButtons>
      </Link>
      {
        location.pathname === '/' && (
          <div>
            <a style={{ textDecoration: 'none' }} href='#history' onClick={() => closeSidenav()}>
              <SideButtons>
                <BookOutlined />
                {" " + localizedStrings.history}
              </SideButtons>
            </a>

            <a style={{ textDecoration: 'none' }} href='#myself' onClick={() => closeSidenav()}>
              <SideButtons>
                <BulbOutlined />
                {" " + localizedStrings.aboutMe}
              </SideButtons>
            </a>
          </div>
        )
      }
      <Link style={{ textDecoration: 'none' }} to='/projects' onClick={() => closeSidenav()}>
        <SideButtons>
          <FundProjectionScreenOutlined />
          {" " + localizedStrings.projects}
        </SideButtons>
      </Link>
      <a style={{ textDecoration: 'none' }} href='#Contact' onClick={() => closeSidenav()}>
        <SideButtons >
          <LikeOutlined />
          {" " + localizedStrings.contact}
        </SideButtons>
      </a>
      <SideButtons onClick={() => sendMessage()}>
        <LaptopOutlined />
        {" " + localizedStrings.wantAWebSite}
      </SideButtons>

      <PreferencesDiv>
        <p style={{ fontSize: '20px', color: 'white' }}>{localizedStrings.defineTheme} </p>

        <SwitchButton
          onClick={() => changeTheme()}
          defaultChecked={theme === 'white' ? false : true} />
      </PreferencesDiv>
    </Nav>
  )
}

export default Sidenav;