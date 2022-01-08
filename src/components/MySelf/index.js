import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { localizedStrings } from '../../constants';
import {
  CardMySelf,
  Content,
  Image,
  Text,
} from './style';
import { FlexContainer } from '../FlexContainer';

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

    setStyleContent({ backgroundColor: 'rgb(0,0,0,0.5)', color: '#fff' });
    setStyleTitle({ color: '#fff' });

  }, [theme])

  return (
    <CardMySelf id="myself" style={styleContent}>
      <FlexContainer>
        <Content style={{padding: '16px'}}>
          <h1 style={styleTitle}> {localizedStrings.myName} </h1>

          <Text> {localizedStrings.ITStudent} <span> {localizedStrings.startedOnProgramming} </span></Text>
          <Text> {localizedStrings.currently} </Text>

          
        </Content>
        <Content style={{width: '40%'}}>
          <Image src='./favicon.png' alt='Félix Developer' />
        </Content>
        
      </FlexContainer>
    </CardMySelf>
  )
}

export default MySelf;