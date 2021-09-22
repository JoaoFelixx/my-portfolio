import { 
  useDispatch,
  useSelector, 
} from 'react-redux'
import { StyledMenu } from "./style"
import { 
  toggleSideNav 
} from '../../store/actions' 

export const Menu = () => {
  const dispatch = useDispatch()
  const { 
    sidenavIsOpen,
  } = useSelector(state => state)


  const openSidenav = () => {
    
    const preferences = { sidenavIsOpen: true }

    dispatch(toggleSideNav(preferences))
  }

  return (
    <div>
      { !sidenavIsOpen && 
        <StyledMenu onClick={() => openSidenav()}> 
          &#9776; 
        </StyledMenu> 
      }
    </div>
    
  )
}