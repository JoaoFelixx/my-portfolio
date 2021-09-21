const INITIAL_STATE = {
  language: 'pt',
  theme: 'white',
  sidenavIsOpen: false
} 

export const reducer = (state = INITIAL_STATE, action) => {

  if (action.type === 'SET_THEME') return {
    ...state,
    ...action.theme
  }

  if (action.type === 'SET_LANGUAGE') return {
    ...state,
    ...action.language
  }

  if (action.type === 'SET_SIDENAV') return {
    ...state,
    ...action.sidenavIsOpen
  }
  
  return state  
}