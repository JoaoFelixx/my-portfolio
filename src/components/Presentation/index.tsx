import { localizedStrings } from '../../constants/localizedStrings';
import { Body, Span, Title, Content, } from './style';

export function Presentation() {
  return (
    <Body>
      <Content>
        <Title> {localizedStrings.felixDeveloper} </Title>
        <Span> {localizedStrings.fullStackDeveloper} </Span>
      </Content>
    </Body>
  )
}