import { useEffect, useState } from 'react';
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux';
import { 
  Project,
  Content,
  Title,
  Text,
  Image,
  Link,
} from './style';

export const Center = () => {

  const {
    language,
    theme,
  } = useSelector(state => state);

  const [styleContent, setStyleContent] = useState({});
  const [styleTitle,setStyleTitle ] = useState({});


  useEffect(() => {

    if (theme === 'white') {
      setStyleContent({ backgroundColor: '#fff', color: '#000000' });
      setStyleTitle({ color: '#000000' });
      return
    }
       
    setStyleContent({ backgroundColor: '#4F4F4F', color: '#fff' });
    setStyleTitle({ color: '#fff' });
  },[theme])

  return (
    <div>
      <Project style={styleContent}>
        <Image src="./img/node.png" alt="NodeJS projects" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.fsNode }</Title>
          <Text>{ localizedStrings[language].content.fsNode }</Text>
          <a href="https://github.com/JoaoFelixx/system-files-nodejs">
            <Link>{ localizedStrings[language].viewProject }</Link>        
          </a>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/server.png" alt="NodeJS projects" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.api }</Title>
          <Text>{ localizedStrings[language].content.api }</Text>
          <a href="https://github.com/JoaoFelixx/API-nodeJS">
            <Link>{ localizedStrings[language].viewProject }</Link>
          </a>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/login.png" alt="Login System" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.loginSimulator }</Title>
          <Text>{ localizedStrings[language].content.loginSimulator }</Text>
          <a href="https://joaofelixx.github.io/back-end_simulator_with_js/">
            <Link>{ localizedStrings[language].viewProject }</Link>
          </a>        
        </Content>
      </Project>
    </div>
  )
}
