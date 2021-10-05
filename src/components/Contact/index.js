import { useSelector } from 'react-redux';
import { localizedStrings } from '../../constants';
import {
  Link,
  StyledFooter,
} from './style';

export const Contact = () => {

  const {
    language,
  } = useSelector(state => state);
  
  return (
    <StyledFooter>
      <h2> { localizedStrings[language].mySocialNetwork } </h2>
      <Link 
        className="fa fa-facebook"
        href="https://www.facebook.com/profile.php?id=100025015540249" 
        style={{ backgroundColor: '#3B5998', color: '#fff' }} /> 
      <Link 
        className="fa fa-linkedin"
        href="https://www.linkedin.com/in/felix-devweb/" 
        style={{ backgroundColor: '#007bb5', color: '#fff' }} /> 
      <Link 
        className="fa fa-instagram"
        href="https://www.instagram.com/jonh_felixx/?hl=pt-br" 
        style={{ backgroundImage: 'linear-gradient(-55deg, #FF0040, #DF01D7, #FF8000)', color: '#fff' }}/> 
    </StyledFooter> 
  )
}