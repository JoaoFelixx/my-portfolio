import {
  createContext,

  useState,
  useContext,
} from 'react';


type Theme = 'dark' | 'light';
type Language = 'pt' | 'en';

interface SettingsContextType {
  theme: Theme;
  language: Language;
  toggleTheme: () => void;
  setLanguage: (lang: Language) => void;
}

interface SettingsProviderProps {
  children: React.ReactNode
}


const SettingsContext = createContext<SettingsContextType | undefined>(undefined);


export function SettingsProvider({ children }: SettingsProviderProps) {
  const [theme, setTheme] = useState<Theme>('dark');
  const [language, setLanguage] = useState<Language>('pt');

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark');

  return (
    <SettingsContext.Provider value={{ theme, language, toggleTheme, setLanguage }}>
      <div className={theme}>
        {children}
      </div>
    </SettingsContext.Provider>
  );
}


export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
}