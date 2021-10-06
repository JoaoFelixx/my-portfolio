import { useEffect, useState} from 'react';
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux';
import { 
  StyledHeader, 
  StyledSpan, 
  StyledH1, 
} from './style';

export const Header = () => {
  const {
    language,
    theme,
  } = useSelector(state => state);

  const [colorParagraph,setColorParagraph] = useState({});
  const [colorTitle,setColorTitle] = useState({});

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
    <StyledHeader id="Home">
      <StyledH1  style={colorTitle}>{ localizedStrings[language].myPortfolio }</StyledH1>
      
      <StyledSpan style={colorParagraph}>{ localizedStrings[language].welcome }</StyledSpan> 
    </StyledHeader>
  )
}