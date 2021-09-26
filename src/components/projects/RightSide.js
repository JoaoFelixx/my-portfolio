import { useEffect, useState } from 'react'
import { localizedStrings } from '../../constants'
import { useSelector } from 'react-redux'
import { 
  Project,
  Content,
  Image,
  Title,
  Text,
  Link,
} from './style'

export const RightSide = () => {

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
    <div>
      <Project style={styleContent}>
        <Image src="./img/php.jpg" alt="Projetos desenvolvidos com php" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.loginPHP }</Title>
          <Text>{ localizedStrings[language].content.loginPHP }</Text>
          <Link style={{position: 'relative', top: '15px'}}>{ localizedStrings[language].viewProject }</Link>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="https://programathor.com.br/blog/wp-content/uploads/2017/11/programathor-676x355.jpg"
          alt="Programathor" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.dashboard }</Title>
          <Text>{ localizedStrings[language].content.dashboard }</Text>
          <Link style={{position: 'relative', top: '15px'}}>{ localizedStrings[language].viewProject }</Link>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/robot.jpg" alt="Projeto Next" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.next }</Title>
          <Text>{ localizedStrings[language].content.next }</Text>
          <Link style={{position: 'relative', top: '15px'}}>{ localizedStrings[language].viewProject }</Link>
        </Content>
      </Project>
    </div>
  )
}
