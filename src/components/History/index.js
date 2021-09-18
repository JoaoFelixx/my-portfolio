import { localizedStrings } from '../../constants'
import { useSelector } from 'react-redux'
import { 
  HistoryDiv,
  Content 
} from './style'

export const History = () => {
  const {
    language,
  } = useSelector(state => state)

  return (
    <HistoryDiv>
      <img loading="lazy" src="./img/programar.png" alt="coding" />
      <Content>
        <h1 > { localizedStrings[language].historyWithIT } </h1>
        <p>
        { localizedStrings[language].historyWithITContent }
        </p>
      </Content>
    </HistoryDiv>
  )
}