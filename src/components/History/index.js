import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux';
import {
  Card,
  Content,
  Title,
  Text,
} from './style';

function History() {

  const { theme } = useSelector(state => state);

  return (
    <Card id="history" theme={theme}>
      <Content>
        <Title theme={theme}> {localizedStrings.historyWithIT} </Title>
        <Text> {localizedStrings.historyWithITContent} </Text>
      </Content>
    </Card>
  )
}

export default History;