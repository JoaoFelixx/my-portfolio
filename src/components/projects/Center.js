import { useEffect, useState } from 'react'
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux'
import { 
  Project,
  Content,
  Title,
  Text,
  Image,
} from './style';

export const Center = () => {

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
        <Image src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" alt="NodeJS projects" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.fsNode }</Title>
          <Text>{ localizedStrings[language].content.fsNode }</Text>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="https://fernandofranzini.files.wordpress.com/2017/07/nodejs-2-562x3092x-op.png" alt="NodeJS projects" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.api }</Title>
          <Text>{ localizedStrings[language].content.api }</Text>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/login.jpg" alt="Login System" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.loginSimulator }</Title>
          <Text>{ localizedStrings[language].content.loginSimulator }</Text>
        </Content>
      </Project>
    </div>
  )
}
