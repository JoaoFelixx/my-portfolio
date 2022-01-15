import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  Head,
  Span,
} from './style';

function Header({ title, subTitle, }) {

  const [colorParagraph, setColorParagraph] = useState({});
  const [colorTitle, setColorTitle] = useState({});
  const { theme } = useSelector(state => state);

  useEffect(() => {
    const darkTheme = {
      paragraph: { background: '#000000', color: '#fff' },
      title: { color: '#000000' }
    }
    const whiteTheme = {
      paragraph: { background: '#fff', color: '#000000' },
      title: { color: '#fff' }
    }

    setColorParagraph(theme === 'white' ? darkTheme.paragraph : whiteTheme.paragraph);
    setColorTitle(theme === 'white' ? darkTheme.title : whiteTheme.title);

  }, [theme])

  return (
    <Head id="Home">
      <h1 style={colorTitle}>{title}</h1>
      <Span style={colorParagraph}>{subTitle}</Span>
    </Head>
  )
}

export default Header;