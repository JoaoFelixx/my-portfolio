import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch } from 'antd'
import { localizedStrings } from '../../constants'
import { 
  toggleSideNav, 
  toggleTheme,
} from '../../store/actions'
import { 
  HomeOutlined,
  BookOutlined,
  BulbOutlined,
  LikeOutlined,
  LaptopOutlined,
  FundProjectionScreenOutlined, 
} from '@ant-design/icons'
import {
  CloseButton,
  SideButtons,
  StyledSidenav,
  PreferencesDiv,
} from './style'

export const Sidenav = () => {
  const dispatch = useDispatch()

  const [style, setStyle] = useState({ width: '0' })

  const {
    language,
    theme,
    sidenavIsOpen,
  } = useSelector(state => state)
  
  const closeSidenav = () => {
  
    const preference = { sidenavIsOpen: false }

    dispatch(toggleSideNav(preference))

  }

  const changeTheme = () => {

    const isWhiteOrDarkTheme = theme === 'white' ? 'dark' : 'white';

    const preference = { theme: isWhiteOrDarkTheme }
    
    dispatch(toggleTheme(preference))

  }

  useEffect(() => {
    const width = sidenavIsOpen ? { width: '300px' } : { width: '0' } 

    setStyle(width)

  }, [sidenavIsOpen])

  return (
    <StyledSidenav style={ style }>
      <CloseButton onClick={() => closeSidenav()}> &times;  </CloseButton>
      <SideButtons>
        <HomeOutlined />
        {" "+localizedStrings[language].home }      
      </SideButtons>
      <SideButtons>
        <BookOutlined />  
        {" "+localizedStrings[language].history }   
      </SideButtons>
      <SideButtons>
        <BulbOutlined />        
        {" "+localizedStrings[language].aboutMe }   
      </SideButtons>
      <SideButtons>
        <FundProjectionScreenOutlined />        
        {" "+localizedStrings[language].projects }  
      </SideButtons>
      <SideButtons>
        <LikeOutlined />        
        {" "+localizedStrings[language].contact }   
      </SideButtons>
      <SideButtons href="https://felixfreelancer.netlify.app/">
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
