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
    if (theme === 'white') {
      setColorContent({ backgroundColor: 'rgb(255,255,255,0.5)', color: '#000000' });
      setColorTitle({ color: '#000000' });
      return;
    }

    setColorContent({ backgroundColor: 'rgb(0,0,0,0.5)', color: '#fff' });
    setColorTitle({ color: '#fff' });
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