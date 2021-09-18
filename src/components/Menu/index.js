import { 
  useDispatch, 
  useSelector 
} from 'react-redux'
import { StyledMenu } from "./style"
import { 
  toggleSideNav 
} from '../../store/actions' 

export const Menu = () => {
  const dispatch = useDispatch()
  
  const { 
    language,
    theme,
  } = useSelector(state => state)
  
  const openSidenav = () => {
    
    const preferences = {
      language,
      theme,
      sidenavIsOpen: true
    }

    dispatch(toggleSideNav(preferences))
  }

  return (
    <StyledMenu onClick={() => openSidenav()}> 
      &#9776; menu 
    </StyledMenu>
  )
}