import React from 'react';
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
  styleTitle,
  styleContent,
}) => {
  
  return (
    <Project style={styleContent}>
      <Image src={src} alt={alt} />
      <Content>
        <Title style={styleTitle}>{ title }</Title>
        <Text>{ text }</Text>
        <a href={link}>
          <Link>{ localizedStrings.viewProject }</Link>        
        </a>
      </Content>
    </Project>
  )
}