import { useEffect, useState } from 'react';
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux';
import { 
  CardHistory,
  Content,
  Text,
} from './style';

export const History = () => {

  const [colorContent, setColorContent] = useState({});
  const [colorTitle,setColorTitle] = useState({});
  const { theme } = useSelector(state => state);

  useEffect(() => {
    if (theme === 'white') {
      setColorContent({ backgroundColor: '#fff', color: '#000000' });
      setColorTitle({ color: '#000000' });
      return;
    } 

    setColorContent({ backgroundColor: '#4F4F4F', color: '#fff' });
    setColorTitle({ color: '#fff' }); 
  }, [theme])

  return (
    <CardHistory id="history" style={colorContent}>
      <Content>
        <h1 style={colorTitle}> { localizedStrings.historyWithIT } </h1>
        <Text> { localizedStrings.historyWithITContent } </Text>
      </Content>
    </CardHistory>
  )
}