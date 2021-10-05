import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { localizedStrings } from '../../constants';
import {
  MySelfDiv,
  Content,
  Image,
  Text,
} from './style';

export const MySelf = () => {

  const [styleContent, setStyleContent] = useState({});
  const [styleTitle, setStyleTitle] = useState({});
  const {
    theme,
    language,
  } = useSelector(state => state);


  useEffect(() => {

    if (theme === 'white') {
      setStyleContent({ backgroundColor: '#fff', color: '#000000' });
      setStyleTitle({color: '#000000'});
      return 
    }

    setStyleContent({ backgroundColor: '#4F4F4F', color: '#fff' });
    setStyleTitle({color: '#fff'});

  }, [theme])

  return (
    <MySelfDiv style={styleContent}>
      <Image loading="lazy" src="./img/joao.jpg" alt="João-Carlos-Felix" />
      <Content>
        <h1 style={styleTitle}> { localizedStrings[language].myName } </h1>
        
        <Text> { localizedStrings[language].ITStudent } <span> { localizedStrings[language].startedOnProgramming } </span></Text>
        <Text> { localizedStrings[language].currently } </Text>
        
        <a href="#projects"> { localizedStrings[language].clickHere } </a>
      </Content>
    </MySelfDiv>
  )
}