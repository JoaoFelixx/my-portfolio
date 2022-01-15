import { useEffect, useState } from 'react';
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux';
import {
  CardHistory,
  Content,
  Title,
  Text,
} from './style';

function History() {

  const [colorContent, setColorContent] = useState({});
  const [colorTitle, setColorTitle] = useState({});
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

    setColorContent(theme === 'white' ? whiteTheme.content : darkTheme.content);
    setColorTitle(theme === 'white' ? whiteTheme.title : darkTheme.title);

  }, [theme])

  return (
    <CardHistory id="history" style={colorContent}>
      <Content>
        <Title style={colorTitle}> {localizedStrings.historyWithIT} </Title>
        <Text> {localizedStrings.historyWithITContent} </Text>
      </Content>
    </CardHistory>
  )
}

export default History;