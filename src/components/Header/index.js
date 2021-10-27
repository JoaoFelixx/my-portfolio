import { useEffect, useState} from 'react';
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux';
import { 
  StyledHeader, 
  StyledSpan, 
  StyledH1, 
} from './style';

export const Header = () => {

  const [colorParagraph,setColorParagraph] = useState({});
  const [colorTitle,setColorTitle] = useState({});
  const {
    theme,
  } = useSelector(state => state);

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
      <StyledH1  style={colorTitle}>{ localizedStrings.myPortfolio }</StyledH1>
      
      <StyledSpan style={colorParagraph}>{ localizedStrings.welcome }</StyledSpan> 
    </StyledHeader>
  )
}