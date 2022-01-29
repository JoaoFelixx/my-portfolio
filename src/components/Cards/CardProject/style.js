import styled from 'styled-components'

const Project = styled.div`
  width: 100%;
  box-shadow: inset 0 0 1em transparent, 0 0 1em rgb(0, 0, 0);
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border: 1px solid #000000;
  margin: 8px;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  
  background-color: ${props => props.theme === 'white' ? '#fff' : '#4F4F4F'};
  color: ${props => props.theme === 'white' ? '#000' : '#fff'};
  
  @media (max-width: 820px) { 
    width: 94%;
    padding: 4px; 
    margin-top: 8px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 0;
  }
`;

const Content = styled.div`
  padding: 10px;
`;

const Image = styled.img`
  width: 100%;
  max-width: 100%;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  &:hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const Title = styled.h3`
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme === 'white' ? '#000' : '#fff'};
`;

const Text = styled.p`
  font-size: 18px;
`;

const Link = styled.button`
  width: 100%;
  height: 40px;
  background-color: #1878D1;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  border-radius: 10px;
  font-size: 18px;
  
  &:hover {
    transition: 1s; 
    background-color: #1331E8;
  }    
`;

export {
  Link,
  Text,
  Title,
  Image,
  Content,
  Project,
}