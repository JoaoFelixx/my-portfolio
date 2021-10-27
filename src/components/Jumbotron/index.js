import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { localizedStrings } from '../../constants';
import { StyledJumbotron } from './style';

export const Jumbotron = () => {
  
  const [colorContent, setContentColor] = useState({});
  const {
    theme,
  } = useSelector(state => state);

  useEffect(() => {
    
    setContentColor(theme === 'white' ? { background: '#000000' } : { background: '#4F4F4F' })

  }, [theme])
  return (
    <StyledJumbotron id="Project" style={colorContent}>
      <h1 style={{ color: '#fff' }}> { localizedStrings.projectsDeveloped } </h1>
    </StyledJumbotron>
  )
}