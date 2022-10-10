import { createContext, useContext } from 'react';
import { Provider, Skills } from 'interfaces';
import { localizedStrings } from 'constants/localizedStrings';

interface SkillsProviderParams {
  skills: Skills['skills']
}

const Context = createContext({ skills: localizedStrings.skills });

const useSelectorSkills = (): SkillsProviderParams => useContext(Context);

function SkillsProvider({ children }: Provider) {
  return (
    <Context.Provider value={{ skills: localizedStrings.skills }}>
      {children}
    </Context.Provider>
  )
}

export { useSelectorSkills, SkillsProvider };