import { useSelectorSettings } from 'Context/SettingsProvider';
import { SwitchButton } from './style';

export function Switch() {
  const { theme, dispatch } = useSelectorSettings();

  const changeTheme = () => {
    const isWhiteOrDarkTheme = theme === 'white' ? 'dark' : 'white';

    const preference = { theme: isWhiteOrDarkTheme };

    dispatch?.(preference);    
  }

  return (
    <SwitchButton className="switch__container">
      <input id="switch-shadow" className="switch switch--shadow" type="checkbox" onClick={changeTheme}/>
      <label htmlFor="switch-shadow"></label>
    </SwitchButton>
  )
}