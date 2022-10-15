import {
  useContext,
  useReducer,
  createContext,
} from 'react';
import { Action, Provider, Settings } from 'interfaces';

const initialState: Settings = {
  theme: 'white',
  language: 'pt',
  sideNavIsOpen: false,
}

const Context = createContext<Settings>(initialState);

const useSelectorSettings = (): Settings => useContext(Context);

const reducer = (state: Settings, action: Action) => ({
  'change-settings': { ...state, ...action.payload }
}[action.type])

function SettingsProvider({ children }: Provider) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ ...state, dispatch }}>
      {children}
    </Context.Provider>
  )
}

export { SettingsProvider, useSelectorSettings };