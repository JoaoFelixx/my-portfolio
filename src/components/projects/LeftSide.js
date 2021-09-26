import { useEffect, useState } from 'react'
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux'
import { 
  Project,
  Content,
  Image,
  Title,
  Text,
  Link,
} from './style'

export const LeftSide = () => {

  const {
    language,
    theme,
  } = useSelector(state => state)

  const [styleContent, setStyleContent] = useState({})
  const [styleTitle,setStyleTitle ] = useState({})


  useEffect(() => {

    if (theme === 'white') {
      setStyleContent({ backgroundColor: '#fff', color: '#000000' })
      setStyleTitle({ color: '#000000' })
      return
    }
       
    setStyleContent({ backgroundColor: '#4F4F4F', color: '#fff' })
    setStyleTitle({ color: '#fff' })
    return 

  },[theme])

  return (
    <div >
      <Project style={styleContent}>
        <Image src="./img/tesem.png" alt="Tese Mobilidade Company" />
        <Content> 
          <Title style={styleTitle}>{ localizedStrings[language].title.tese }</Title>
          <Text>{ localizedStrings[language].content.tese }</Text>
          <Link>{ localizedStrings[language].viewProject }</Link>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/appquiz.png" alt="Jogo de Quiz desenvolvido com JS" />
        <Content> 
          <Title style={styleTitle}>{ localizedStrings[language].title.quiz }</Title>
          <Text>{ localizedStrings[language].content.quiz }</Text>
          <Link style={{ position: 'relative', top: '3px' }}>{ localizedStrings[language].viewProject }</Link>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/customware.png" alt="Custom Ware Company" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.customWare }</Title>
          <Text>{ localizedStrings[language].content.customWare }</Text>
          <Link>{ localizedStrings[language].viewProject }</Link>
        </Content> 
      </Project>
    </div>
  )
}
