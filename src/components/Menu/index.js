import { 
  useDispatch,
  useSelector, 
} from 'react-redux';
import { MenuOutlined } from '@ant-design/icons';
import { StyledMenu } from "./style";
import { toggleSideNav } from '../../store/actions';

export const Menu = () => {
  const dispatch = useDispatch();
  const { 
    sidenavIsOpen,
  } = useSelector(state => state);


  const openSidenav = () => {
    
    const preferences = { sidenavIsOpen: true }

    dispatch(toggleSideNav(preferences));
  }

  return (
    <div>
      { !sidenavIsOpen && 
        <StyledMenu onClick={() => openSidenav()}> 
          <MenuOutlined style={{ width: '50px', height: '50px' }} /> 
        </StyledMenu> 
      }
    </div>
    
  )
}
