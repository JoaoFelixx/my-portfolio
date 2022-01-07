import { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { 
  Head, 
  Span, 
} from './style';

function Header({
  title,
  subTitle,
}) {

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
      <h1  style={colorTitle}>{ title }</h1>
      <Span style={colorParagraph}>{ subTitle }</Span> 
    </Head>
  )
}

export default Header;