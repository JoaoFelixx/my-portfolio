import { useSelectorSettings } from 'Context/SettingsProvider';
import { Title, Head, Span, } from './style';

interface Texts {
  title: string;
  subTitle: string;
}

function Header({ title, subTitle }: Texts) {
  const { theme } = useSelectorSettings();

  return (
    <Head id="Home">
      <Title theme={theme}> {title} </Title>
      <Span theme={theme}> {subTitle} </Span>
    </Head>
  )
}

export default Header;