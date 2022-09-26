import {
  useState,
  useContext,
  useCallback,
  createContext,
} from 'react';
import { Provider, Settings } from 'interfaces';

const defaultSettings: Settings = {
  theme: 'white',
  language: 'pt',
  sideNavIsOpen: false,
}

const Context = createContext<Settings>(defaultSettings);

const useSelectorSettings = (): Settings => useContext(Context);

function SettingsProvider({ children }: Provider) {

  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const dispatch = useCallback((preference: Partial<Settings>) =>
    setSettings({ ...settings, ...preference }), [settings])

  return (
    <Context.Provider value={{ ...settings, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export { SettingsProvider, useSelectorSettings };