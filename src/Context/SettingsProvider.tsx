import { 
  useState, 
  useEffect, 
  useContext,
  useCallback, 
  createContext, 
} from 'react';
import { Provider, Settings } from 'interfaces';

const defaultSettings: Settings = {
  language: 'pt',
  sideNavIsOpen: false,
  theme: 'white',
}

const Context = createContext<Settings>(defaultSettings);

const useSelectorSettings = (): Settings => useContext(Context);

function SettingsProvider({ children }: Provider) {

  const [settings, setSettings] = useState<Settings>(defaultSettings);

  const dispatch = useCallback((preference: Partial<Settings>) => {
    try {
      const settingsPreference: Settings = {
        ...settings,
        ...preference
      }

      setSettings(settingsPreference);

    } catch (error) {
      console.error(error)
    }
  }, [settings]) 

  useEffect(() => {
    if (settings.dispatch)
      return

    const settingsWithDispatch: Settings = {
      ...settings,
      dispatch,
    }

    setSettings(settingsWithDispatch);
    
  }, [dispatch, settings])

  return (
    <Context.Provider value={settings}>
      {children}
    </Context.Provider>
  )
}

export { SettingsProvider, useSelectorSettings };