import { Link, useLocation } from 'react-router-dom';
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
  SideBtn,
  CloseBtn,
  Preferences,
} from './style';
import { SwitchButton } from '../Buttons';

function Sidenav() {
  const API_WHATS_APP = 'https://api.whatsapp.com/send?phone=+5513997173668text=';
  const dispatch = useDispatch();
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

  return (
    <Nav sidenavIsOpen={sidenavIsOpen}>
      <CloseBtn onClick={() => closeSidenav()}> &times; </CloseBtn>

      <Link style={{ textDecoration: 'none' }} to='/' onClick={() => closeSidenav()}>
        <SideBtn>
          <HomeOutlined />
          {" " + localizedStrings.home}
        </SideBtn>
      </Link>
      {
        location.pathname === '/' && (
          <div>
            <a style={{ textDecoration: 'none' }} href='#history' onClick={() => closeSidenav()}>
              <SideBtn>
                <BookOutlined />
                {" " + localizedStrings.history}
              </SideBtn>
            </a>

            <a style={{ textDecoration: 'none' }} href='#myself' onClick={() => closeSidenav()}>
              <SideBtn>
                <BulbOutlined />
                {" " + localizedStrings.aboutMe}
              </SideBtn>
            </a>
          </div>
        )
      }
      <Link style={{ textDecoration: 'none' }} to='/projects' onClick={() => closeSidenav()}>
        <SideBtn>
          <FundProjectionScreenOutlined />
          {" " + localizedStrings.projects}
        </SideBtn>
      </Link>
      <a style={{ textDecoration: 'none' }} href='#Contact' onClick={() => closeSidenav()}>
        <SideBtn >
          <LikeOutlined />
          {" " + localizedStrings.contact}
        </SideBtn>
      </a>
      <SideBtn onClick={() => sendMessage()}>
        <LaptopOutlined />
        {" " + localizedStrings.wantAWebSite}
      </SideBtn>

      <Preferences>
        <p style={{ fontSize: '20px', color: 'white' }}>{localizedStrings.defineTheme} </p>

        <SwitchButton
          onClick={changeTheme}
          value={theme}
          defaultChecked={false} />
      </Preferences>
    </Nav>
  )
}

export default Sidenav;