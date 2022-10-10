import { HomePage } from './pages';
import { IconContext } from 'react-icons';
import { SettingsProvider } from 'Context/SettingsProvider';
import { SkillsProvider } from 'Context/SkillsProvider';
import { GlobalStyle, iconSettings } from 'styles';

function Application() {
  return (
    <SettingsProvider>
      <SkillsProvider>
        <IconContext.Provider value={iconSettings} >
          <GlobalStyle />
          <HomePage />
        </IconContext.Provider>
      </SkillsProvider>
    </SettingsProvider>
  )
}

export default Application;