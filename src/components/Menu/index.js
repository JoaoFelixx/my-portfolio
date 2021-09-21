import { 
  useDispatch, 
} from 'react-redux'
import { StyledMenu } from "./style"
import { 
  toggleSideNav 
} from '../../store/actions' 

export const Menu = () => {
  const dispatch = useDispatch()
  
  const openSidenav = () => {
    
    const preferences = { sidenavIsOpen: true }

    dispatch(toggleSideNav(preferences))
  }

  return (
    <StyledMenu onClick={() => openSidenav()}> 
      &#9776; menu 
    </StyledMenu>
  )
}