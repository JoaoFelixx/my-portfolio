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

    if (theme === 'white') {
      setStyleContent({ backgroundColor: 'rgb(255,255,255,0.5)', color: '#000000' });
      setStyleTitle({ color: '#000000' });
      return
    }

    setStyleContent({ backgroundColor: 'rgb(0,0,0,0.7)', color: '#fff' });
    setStyleTitle({ color: '#fff' });

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