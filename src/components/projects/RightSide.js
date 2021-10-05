import { useEffect, useState } from 'react';
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux';
import { 
  Project,
  Content,
  Image,
  Title,
  Text,
  Link,
} from './style';

export const RightSide = () => {

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
        <Image src="./img/php.png" alt="Projetos desenvolvidos com php" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.loginPHP }</Title>
          <Text>{ localizedStrings[language].content.loginPHP }</Text>
          <a href="https://github.com/JoaoFelixx/login-system-php">
            <Link>{ localizedStrings[language].viewProject }</Link>
          </a>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/programathor.png"
          alt="Programathor" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.dashboard }</Title>
          <Text>{ localizedStrings[language].content.dashboard }</Text>
          <a href="https://joaofelixx.github.io/dashboard-programathor/">
            <Link>{ localizedStrings[language].viewProject }</Link>
          </a>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/next.png" alt="Projeto Next" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings[language].title.next }</Title>
          <Text>{ localizedStrings[language].content.next }</Text>
          <a href="https://joaofelixx.github.io/robot-chat/">
            <Link>{ localizedStrings[language].viewProject }</Link>
          </a>
        </Content>
      </Project>
    </div>
  )
}
