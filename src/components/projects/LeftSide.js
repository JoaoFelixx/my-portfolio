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

export const LeftSide = () => {

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
    <div >
      <Project style={styleContent}>
        <Image src="./img/tese.jpg" alt="Tese Mobilidade Company" />
        <Content> 
          <Title style={styleTitle}>{ localizedStrings.title.tese }</Title>
          <Text>{ localizedStrings.content.tese }</Text>
          <a href="https://joaofelixx.github.io/tesemobilidade/">
            <Link>{ localizedStrings.viewProject }</Link>
          </a>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/quiz.jpg" alt="Jogo de Quiz desenvolvido com JS" />
        <Content> 
          <Title style={styleTitle}>{ localizedStrings.title.quiz }</Title>
          <Text>{ localizedStrings.content.quiz }</Text>
          <a href="https://joaofelixx.github.io/app_quiz/">
            <Link>{ localizedStrings.viewProject }</Link>
          </a>
        </Content>
      </Project>
      <br />
      <Project style={styleContent}>
        <Image src="./img/customware.jpg" alt="Custom Ware Company" />
        <Content>
          <Title style={styleTitle}>{ localizedStrings.title.customWare }</Title>
          <Text>{ localizedStrings.content.customWare }</Text>
          <a href="https://github.com/JoaoFelixx/CutomWare-php-simulator-ecommerce">
            <Link>{ localizedStrings.viewProject }</Link>
          </a>
        </Content> 
      </Project>
    </div>
  )
}
