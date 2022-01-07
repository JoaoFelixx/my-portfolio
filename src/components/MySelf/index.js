import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ButtonSocial } from '../Buttons';
import { Link } from 'react-router-dom';
import { localizedStrings } from '../../constants';
import {
  CardMySelf,
  Content,
  Text,
} from './style';

function MySelf() {

  const [styleContent, setStyleContent] = useState({});
  const [styleTitle, setStyleTitle] = useState({});
  const { theme } = useSelector(state => state);

  useEffect(() => {

    if (theme === 'white') {
      setStyleContent({ backgroundColor: '#fff', color: '#000000' });
      setStyleTitle({color: '#000000'});
      return 
    }

    setStyleContent({ backgroundColor: '#4F4F4F', color: '#fff' });
    setStyleTitle({color: '#fff'});

  }, [theme])

  return (
    <CardMySelf id="myself" style={styleContent}>
      <Content>
        <h1 style={styleTitle}> { localizedStrings.myName } </h1>
        
        <Text> { localizedStrings.ITStudent } <span> { localizedStrings.startedOnProgramming } </span></Text>
        <Text> { localizedStrings.currently } </Text>
        
        <Link to='/projects'> 
          <ButtonSocial text={localizedStrings.clickHere} />  
        </Link>
      </Content>
    </CardMySelf>
  )
}

export default MySelf;