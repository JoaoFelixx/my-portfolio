import { Switch } from 'antd'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { localizedStrings } from '../../constants'
import { toggleSideNav } from '../../store/actions'
import {
  CloseButton,
  SideButtons,
  StyledSidenav
} from './style'

export const Sidenav = () => {
  const dispatch = useDispatch()
  const [style, setStyle] = useState({ width: '0' })
  const [closedTheSidenav,setClosedTheSidenav] = useState(false)
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
      <Switch defaultChecked />    
    </StyledSidenav>
  )
}