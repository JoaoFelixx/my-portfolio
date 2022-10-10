import React, { useMemo, useCallback } from 'react';
import { environments } from 'constants/environments';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorSettings } from 'Context/SettingsProvider';
import { FaHome, FaLaptopCode } from 'react-icons/fa';
import { AiOutlineFundProjectionScreen, AiFillLike } from 'react-icons/ai';
import { NavBar, SideNav, Presentation, Menu, SoftSkills, } from 'components';
import { useSelectorSkills } from 'Context/SkillsProvider';

type FunctionsType = 'closeSideNav' | 'sendMessage';

export function Home() {
  const { dispatch, sideNavIsOpen } = useSelectorSettings();
  const { skills } = useSelectorSkills();

  const toolToFunctions = useCallback((type: FunctionsType) => ({
    'closeSideNav': () => dispatch?.({ sideNavIsOpen: false }),
    'sendMessage': () => window.location.assign(environments.API_WHATS_APP),
  }[type]), [dispatch])

  const scrollTop = () => window.scrollTo(0, 0);

  const { sideParams } = useMemo(() => {
    return {
      sideParams: [{
        funcOnClick: scrollTop,
        Icon: FaHome,
        text: localizedStrings.home,
      }, {
        funcOnClick: toolToFunctions('closeSideNav'),
        Icon: AiOutlineFundProjectionScreen,
        text: localizedStrings.projects,
      }, {
        funcOnClick: toolToFunctions('closeSideNav'),
        Icon: AiFillLike,
        text: localizedStrings.contact,
      }, {
        funcOnClick: toolToFunctions('sendMessage'),
        Icon: FaLaptopCode,
        text: localizedStrings.wantAWebSite,
      }]
    }
  }, [toolToFunctions])

  return (
    <React.Fragment>
      <Menu />
      <NavBar />
      <SideNav sideNavIsOpen={sideNavIsOpen} sideParams={sideParams} />
      <Presentation />
      <SoftSkills skills={skills} />
    </React.Fragment>
  )
}