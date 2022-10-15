import { StyledMenu } from "./style";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSelectorSettings } from "Context/SettingsProvider";

export function Menu() {
  const { dispatch, sideNavIsOpen } = useSelectorSettings()

  const openSideNav = () => dispatch?.({
    type: 'change-settings',
    payload: {
      sideNavIsOpen: true
    }
  });

  return (
    <div>
      {!sideNavIsOpen &&
        <StyledMenu onClick={() => openSideNav()}>
          <GiHamburgerMenu color='#4400AA' style={{ width: '50px', height: '50px' }} />
        </StyledMenu>
      }
    </div>
  )
}