import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch } from 'antd'
import { localizedStrings } from '../../constants'
import { 
  toggleSideNav, 
  toggleTheme,
} from '../../store/actions'
import {
  CloseButton,
  SideButtons,
  StyledSidenav,
  PreferencesDiv,
} from './style'

export const Sidenav = () => {
  const dispatch = useDispatch()

  const [style, setStyle] = useState({ width: '0' })
  const [closedTheSidenav,setClosedTheSidenav] = useState(false)
  const [preferenceTheme,setPreferenceTheme] = useState('default')

  const {
    language,
    theme,
    sidenavIsOpen,
  } = useSelector(state => state)
  
  const closeSidenav = () => {

    const preferences = {
      language,
      theme,
      sidenavIsOpen: false
    }

    dispatch(toggleSideNav(preferences))
    
    setClosedTheSidenav(true)
  }

  const changeTheme = () => {

    const isDefaultOrDarkTheme = preferenceTheme === 'default' ? 'dark' : 'default';

    const preferences = {
      language,
      theme: isDefaultOrDarkTheme,
      sidenavIsOpen
    } 

    dispatch(toggleTheme(preferences))

    setPreferenceTheme(isDefaultOrDarkTheme)
  }

  useEffect(() => {
    if (!sidenavIsOpen) return 

    const width = closedTheSidenav ? { width: '0' } : { width: '300px' }

    setStyle(width)

  }, [sidenavIsOpen,closedTheSidenav])

  return (
    <StyledSidenav style={ style }>
      <CloseButton onClick={() => closeSidenav()}> &times;  </CloseButton>
      <SideButtons>{ localizedStrings[language].home }      </SideButtons>
      <SideButtons>{ localizedStrings[language].history }   </SideButtons>
      <SideButtons>{ localizedStrings[language].aboutMe }   </SideButtons>
      <SideButtons>{ localizedStrings[language].projects }  </SideButtons>
      <SideButtons>{ localizedStrings[language].softSkills }</SideButtons>
      <SideButtons>{ localizedStrings[language].contact }   </SideButtons>
      <SideButtons href="https://felixfreelancer.netlify.app/">{ localizedStrings[language].wantAWebsite }</SideButtons>
      <PreferencesDiv>
        <p style={{color: 'white'}}>localizedStrings[language].defineTheme</p>
        <Switch 
          style={{width: '70px'}}
          checkedChildren={localizedStrings[language].default } 
          unCheckedChildren={ localizedStrings[language].dark } 
          onClick={() => changeTheme()}
          defaultChecked />
      </PreferencesDiv>
    </StyledSidenav>
  )
}