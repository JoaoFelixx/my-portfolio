const toggleLanguage = language => {
  return {
    type: 'SET_LANGUAGE',
    language
  }
}

const toggleSideNav = sidenavIsOpen => {
  return {
    type: 'SET_SIDENAV',
    sidenavIsOpen
  }
}

const toggleTheme = theme => {
  return {
    type: 'SET_THEME',
    theme
  }
}

export {
  toggleLanguage,
  toggleSideNav,
  toggleTheme,
}