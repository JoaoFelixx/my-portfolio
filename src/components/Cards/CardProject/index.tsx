import { useSelectorSettings } from 'Context/SettingsProvider';
import { localizedStrings } from '../../../constants/localizedStrings';
import {
  Link,
  Text,
  Title,
  Image,
  Content,
  Project,
} from './style';

interface ProjectData {
  src: string;
  alt: string;
  text: string;
  link: string;
  title: string;
}

export const CardProject = ({
  src,
  alt,
  text,
  link,
  title,
}: ProjectData) => {
  const { theme } = useSelectorSettings();

  return (
    <Project theme={theme} >
      <Image src={src} alt={alt} />
      <Content>
        <Title theme={theme} >{title}</Title>
        <Text>{text}</Text>
        <a href={link}>
          <Link>{localizedStrings.viewProject}</Link>
        </a>
      </Content>
    </Project>
  )
}