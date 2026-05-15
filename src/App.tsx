import { SettingsProvider } from './Context/SettingsProvider';
import { HomePage } from './pages';

function Application() {
  return (
    <SettingsProvider>
      <HomePage />
    </SettingsProvider>
  )
}

export default Application;