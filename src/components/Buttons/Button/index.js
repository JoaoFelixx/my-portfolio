import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledButton } from './style';

function Button({ text }) {
  const [color,setColor] =useState({});
  const { theme } = useSelector(state => state);

  useEffect(() => {
    if (theme === 'white') 
      return setColor({ backgroundColor: '#000000', color: '#ffffff' })
    
      setColor({ backgroundColor: '#ffffff', color: '#000000' });
  }, [theme])

  return (
    <StyledButton style={color}>{text}</StyledButton>
  )
}

export default Button;