import { localizedStrings } from '../../constants';
import { Body, Span, Title, Content, } from './style';

function Presentation() {
  return (
    <Body>
      <Content>
        <Title> {localizedStrings.felixDeveloper} </Title>
        <Span> {localizedStrings.fullStackDeveloper} </Span>
      </Content>
    </Body>
  )
}

export default Presentation;