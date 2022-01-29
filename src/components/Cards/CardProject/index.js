import React from 'react';
import { useSelector } from 'react-redux';
import { localizedStrings } from '../../../constants';
import {
  Link,
  Text,
  Title,
  Image,
  Content,
  Project,
} from './style';

export const CardProject = ({
  src,
  alt,
  text,
  link,
  title,
}) => {
  const { theme } = useSelector(state => state)

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