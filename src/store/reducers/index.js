const INITIAL_STATE = {
  language: 'pt',
  theme: 'white',
  sidenavIsOpen: false
} 

export const reducer = (state = INITIAL_STATE, action) => {

  if (action.type === 'SET_THEME') return {
    ...state,
    theme: action.theme
  }

  if (action.type === 'SET_LANGUAGE') return {
    ...state,
    language: action.language
  }

  if (action.type === 'SET_SIDENAV') return {
    ...state,
    sidenavIsOpen: action.sidenavIsOpen
  }

  return state  
}