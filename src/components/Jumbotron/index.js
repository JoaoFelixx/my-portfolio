import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { localizedStrings } from '../../constants';
import { StyledJumbotron } from './style';

export const Jumbotron = () => {
  const {
    theme,
    language,
  } = useSelector(state => state);
  
  const [colorContent, setContentColor] = useState({});

  useEffect(() => {
     
    theme === 'white'
      ? setContentColor({ background: '#000000' })
      : setContentColor({ background: '#4F4F4F' })

  }, [theme])
  return (
    <StyledJumbotron style={colorContent}>
      <h1 style={{ color: '#fff' }}> { localizedStrings[language].projectsDeveloped } </h1>
    </StyledJumbotron>
  )
}