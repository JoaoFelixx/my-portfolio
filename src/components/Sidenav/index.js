import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch } from 'antd';
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
  CloseButton,
  SideButtons,
  StyledSidenav,
  PreferencesDiv,
} from './style';

export const Sidenav = () => {
  const API_WHATS_APP = 'https://api.whatsapp.com/send?phone=+5513996409539&text=';
  
  const dispatch = useDispatch();

  const [style, setStyle] = useState({ width: '0' });

  const {
    language,
    theme,
    sidenavIsOpen,
  } = useSelector(state => state);
  
  const closeSidenav = () => {
  
    const preference = { sidenavIsOpen: false }

    dispatch(toggleSideNav(preference));

  }

  const changeTheme = () => {

    const isWhiteOrDarkTheme = theme === 'white' ? 'dark' : 'white';

    const preference = { theme: isWhiteOrDarkTheme }
    
    dispatch(toggleTheme(preference));

  }

  const sendMessage = () => {
    const hour = new Date().getHours();

    if (hour > 6 && hour < 12) 
      window.location.assign(API_WHATS_APP+'Boa%dia%20João!');

    if (hour > 12 && hour < 18) 
      window.location.assign(API_WHATS_APP+'Boa%20tarde%20João!');

    alert('Fora do horário de funcionamento');
  }

  useEffect(() => {
    const width = sidenavIsOpen ? { width: '300px' } : { width: '0' } 

    setStyle(width);

  }, [sidenavIsOpen])

  return (
    <StyledSidenav style={ style }>
      <CloseButton onClick={() => closeSidenav()}> &times; </CloseButton>
      <SideButtons href="#Home">
        <HomeOutlined />
        {" "+localizedStrings[language].home }      
      </SideButtons>
      <SideButtons href="#History">
        <BookOutlined />  
        {" "+localizedStrings[language].history }   
      </SideButtons>
      <SideButtons href="#MySelf">
        <BulbOutlined />        
        {" "+localizedStrings[language].aboutMe }   
      </SideButtons>
      <SideButtons href="#Project">
        <FundProjectionScreenOutlined />        
        {" "+localizedStrings[language].projects }  
      </SideButtons>
      <SideButtons href="#Contact">
        <LikeOutlined />        
        {" "+localizedStrings[language].contact }   
      </SideButtons>
      <SideButtons onClick={() => sendMessage()}>
        <LaptopOutlined />        
        {" "+localizedStrings[language].wantAWebSite }
      </SideButtons>
      <PreferencesDiv>
        <p style={{ fontSize: '20px', color: 'white'}}>{ localizedStrings[language].defineTheme } </p>
        <Switch 
          style={{width: '90px', height: '22px'}}
          checkedChildren={localizedStrings[language].default} 
          unCheckedChildren={localizedStrings[language].dark} 
          onClick={() => changeTheme()}
          defaultChecked />
      </PreferencesDiv>      
    </StyledSidenav>
  )
}