import { createContext} from 'react'

const COLOR_CONTEXT = createContext({
  white: {
    backgroundColor: '#fff', color: '#000000'
  }, 
  dark: {
    backgroundColor: '#4F4F4F', color: '#fff'
  }
})

export default COLOR_CONTEXT;