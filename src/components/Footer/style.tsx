import styled from 'styled-components';

const Foot = styled.footer`
  width: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: rgb(0, 0, 0);
  border: 2px solid rgb(0, 0, 0);
`;

const Link = styled.a`
  padding: 20px;
  width: 10%;
  text-decoration: none;
  border: 1px solid rgb(255, 255, 255);
  font-size: 30px;
  
  &:hover {
    opacity: 0.7;
  }
  
  @media (max-width: 920px) { width: 20%; }
  @media (max-width: 360px) { width: 30%; }
`;

export {
  Foot,
  Link,
}