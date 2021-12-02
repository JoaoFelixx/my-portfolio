import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { 
  Title, 
  Head, 
  Span, 
} from './style';

export const Header = ({
  title,
  subTitle,
}) => {

  const [colorParagraph,setColorParagraph] = useState({});
  const [colorTitle,setColorTitle] = useState({});
  const { theme } = useSelector(state => state);

  useEffect(() => {
    if (theme === 'white') {
      setColorParagraph({ background: '#000000', color: '#fff' });
      setColorTitle({ color: '#000000' });
      return;
    }

    setColorParagraph({ background: '#fff', color: '#000000' });
    setColorTitle({ color: '#fff' });
  },[theme])

  return (
    <Head id="Home">
      <Title  style={colorTitle}>{ title }</Title>
      <Span style={colorParagraph}>{ subTitle }</Span> 
    </Head>
  )
}