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
  
  const [styleContent, setStyleContent] = useState({});
  const [styleTitle,setStyleTitle ] = useState({});
  const {
    theme,
  } = useSelector(state => state);

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
          <Title style={styleTitle}>{ localizedStrings.title.fsNode }</Title>
          <Text>{ localizedStrings.content.fsNode }</Text>
          <a href="https://github.com/JoaoFelixx/system-files-nodejs">
            <Link>{ localizedStrings.viewProject }</Link>        
          </a>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/server.png" alt="NodeJS projects" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings.title.api }</Title>
          <Text>{ localizedStrings.content.api }</Text>
          <a href="https://github.com/JoaoFelixx/API-nodeJS">
            <Link>{ localizedStrings.viewProject }</Link>
          </a>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/login.png" alt="Login System" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings.title.loginSimulator }</Title>
          <Text>{ localizedStrings.content.loginSimulator }</Text>
          <a href="https://joaofelixx.github.io/back-end_simulator_with_js/">
            <Link>{ localizedStrings.viewProject }</Link>
          </a>        
        </Content>
      </Project>
    </div>
  )
}
