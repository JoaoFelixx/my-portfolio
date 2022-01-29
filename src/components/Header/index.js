import { useSelector } from 'react-redux';
import {
  Title,
  Head,
  Span,
} from './style';

function Header({ title, subTitle, }) {
  
  const { theme } = useSelector(state => state);

  return (
    <Head id="Home">
      <Title theme={theme}> {title} </Title>
      <Span theme={theme}> {subTitle} </Span>
    </Head>
  )
}

export default Header;