import { useSelector } from 'react-redux';
import { localizedStrings } from '../../constants';
import {
  Card,
  Text,
  Title,
  Image,
  ContentText,
  ContentImage,
} from './style';
import FlexContainer from '../FlexContainer';

function MySelf() {

  const { theme } = useSelector(state => state);

  return (
    <Card id="myself" theme={theme}>
      <FlexContainer>
        <ContentText>
          <Title theme={theme}> {localizedStrings.myName} </Title>
          <Text> {localizedStrings.ITStudent} <span> {localizedStrings.startedOnProgramming} </span></Text>
          <Text> {localizedStrings.currently} </Text>
        </ContentText>
        <ContentImage>
          <Image src='./img/stacks.gif' alt='Félix Developer' loading="lazy" />
        </ContentImage>
      </FlexContainer>
    </Card>
  )
}

export default MySelf;