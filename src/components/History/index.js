import { useEffect, useState } from 'react'
import { localizedStrings } from '../../constants'
import { useSelector } from 'react-redux'
import { 
  HistoryDiv,
  Content 
} from './style'

export const History = () => {

  const {
    theme,
    language,
  } = useSelector(state => state)

  const [colorContent, setColorContent] = useState({})
  const [colorTitle,setColorTitle] = useState({})

  useEffect(() => {
    if (theme === 'white') {
      setColorContent({ backgroundColor: '#fff', color: '#000000' })
      setColorTitle({ color: '#000000' })
      return
    } 

    setColorContent({ backgroundColor: '#4F4F4F', color: '#fff' })
    setColorTitle({ color: '#fff' })
    return 
  }, [theme])

  return (
    <HistoryDiv>
      <img loading="lazy" src="./img/programar.png" alt="coding" />
      <Content style={colorContent}>
        <h1 style={colorTitle}> { localizedStrings[language].historyWithIT } </h1>
        <p>
        { localizedStrings[language].historyWithITContent }
        </p>
      </Content>
    </HistoryDiv>
  )
}