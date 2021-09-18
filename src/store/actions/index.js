export const toggleLanguage = (language) => {
  return {
    type: 'SET_LANGUAGE',
    language
  }
} 

export const toggleSideNav = (sidenavIsOpen) => {
  return {
    type: 'SET_SIDENAV',
    sidenavIsOpen
  }
}

export const toggleTheme = (theme) => {
  return {
    type: 'SET_THEME',
    theme
  }
}