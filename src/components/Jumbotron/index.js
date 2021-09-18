import { localizedStrings } from '../../constants'
import { useSelector } from 'react-redux'
import { StyledJumbotron } from './style'

export const Jumbotron = () => {
  const {
    language,
  } = useSelector(state => state)
  
  return (
    <StyledJumbotron>
      <h1> { localizedStrings[language].projectsDeveloped } </h1>
    </StyledJumbotron>
  )
}