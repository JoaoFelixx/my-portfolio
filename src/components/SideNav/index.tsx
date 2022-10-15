import React from 'react';
import { Switch } from '../Buttons';
import { IconType } from 'react-icons';
import { localizedStrings } from 'constants/localizedStrings';
import { useSelectorSettings } from 'Context/SettingsProvider';
import { Nav, SideBtn, CloseBtn, Preferences, } from './style';

interface SideProps {
  sideParams: {
    funcOnClick: () => void;
    text: string;
    Icon: IconType;
  }[]
  sideNavIsOpen: boolean;
}

export function SideNav({ sideParams, sideNavIsOpen }: SideProps) {
  const { dispatch } = useSelectorSettings();

  const closeSideNav = () => 
    dispatch?.({ type: 'change-settings',payload: { sideNavIsOpen: false } })

  return (
    <Nav sideNavIsOpen={sideNavIsOpen}>
      <CloseBtn onClick={closeSideNav}> &times; </CloseBtn>
      {React.Children.toArray(
        sideParams.map(({ Icon, funcOnClick, text }) => {
          return (
            <SideBtn onClick={funcOnClick}>
              <Icon />
              <p>{text}</p>
            </SideBtn>
          )
        })
      )}
      <Preferences>
        <p style={{ fontSize: '20px', color: 'white' }}>{localizedStrings.defineTheme} </p>
        <Switch />
      </Preferences>
    </Nav>
  )
}