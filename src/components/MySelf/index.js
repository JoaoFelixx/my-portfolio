import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { localizedStrings } from '../../constants';
import {
  CardMySelf,
  ContentText,
  ContentImage,
  Image,
  Title,
  Text,
} from './style';
import FlexContainer from '../FlexContainer';

function MySelf() {

  const [styleContent, setStyleContent] = useState({});
  const [styleTitle, setStyleTitle] = useState({});
  const { theme } = useSelector(state => state);

  useEffect(() => {
    const whiteTheme = {
      content: { backgroundColor: 'rgb(255,255,255,0.5)', color: '#000000' },
      title: { color: '#000000' }
    }
    const darkTheme = {
      content: { backgroundColor: 'rgb(0,0,0,0.7)', color: '#fff' },
      title: { color: '#fff' }
    }

    setStyleContent(theme === 'white' ? whiteTheme.content : darkTheme.content);
    setStyleTitle(theme === 'white' ? whiteTheme.title : darkTheme.title);

  }, [theme])

  return (
    <CardMySelf id="myself" style={styleContent}>
      <FlexContainer>
        <ContentText>
          <Title style={styleTitle}> {localizedStrings.myName} </Title>

          <Text> {localizedStrings.ITStudent} <span> {localizedStrings.startedOnProgramming} </span></Text>
          <Text> {localizedStrings.currently} </Text>
        </ContentText>
        <ContentImage>
          <Image src='./img/stacks.gif' alt='Félix Developer' loading="lazy" />
        </ContentImage>
      </FlexContainer>
    </CardMySelf>
  )
}

export default MySelf;