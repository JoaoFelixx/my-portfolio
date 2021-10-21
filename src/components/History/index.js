import { useEffect, useState } from 'react';
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux';
import { 
  HistoryDiv,
  Content,
  Image,
  Text,
} from './style';

export const History = () => {

  const {
    theme,
    language,
  } = useSelector(state => state);

  const [colorContent, setColorContent] = useState({});
  const [colorTitle,setColorTitle] = useState({});

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
    <HistoryDiv id="History" style={colorContent}>
      <Image loading="lazy" src="./img/code.jpg" alt="coding" />
      <Content>
        <h1 style={colorTitle}> { localizedStrings[language].historyWithIT } </h1>
        <Text>
        { localizedStrings[language].historyWithITContent }
        </Text>
      </Content>
    </HistoryDiv>
  )
}