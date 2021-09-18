import { localizedStrings } from '../../constants'
import { useSelector } from 'react-redux'
import {
  MySelfDiv,
  Content
} from './style'

export const MySelf = () => {

  const {
    language,
  } = useSelector(state => state)

  return (
    <MySelfDiv>
      <img loading="lazy" src="./img/joao.jpg" alt="João-Carlos-Felix" />
      <Content>
        
        <h1> { localizedStrings[language].myName } </h1>
        
        <p> { localizedStrings[language].ITStudent } <span className="date"> { localizedStrings[language].startedOnProgramming } </span></p>
        
        <p> { localizedStrings[language].currently } </p>
        
        <a href="#projects"> { localizedStrings[language].clickHere } </a>
      </Content>
    </MySelfDiv>
  )
}