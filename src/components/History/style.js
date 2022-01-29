import styled from 'styled-components'

const Card = styled.div`
  margin: 10px;
  padding: 5px;  
  box-shadow: inset 0 0 1em transparent, 0 0 1em rgb(0, 0, 0);
  transition: 0.5s;
  background-color: ${props => props.theme === 'white' ? 'rgb(255,255,255,0.5)' : 'rgb(0,0,0,0.7)'};
  color: ${props => props.theme === 'white' ? '#000' : '#fff'};
`;

const Content = styled.div`
  padding: 16px;
  font-size: 18px;
`;

const Text = styled.p`
  font-size: 22px;
`;

const Title = styled.h1`
  font-weight: normal;
  transition: 0.5s;
  color: ${props => props.theme === 'white' ? '#000' : '#fff'};
`;

export {
  Card,
  Text,
  Title,
  Content,
}