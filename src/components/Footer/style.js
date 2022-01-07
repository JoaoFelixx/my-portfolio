import styled from 'styled-components';

export const Foot = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: row;
  bottom: 1px;
  width: 100%;
  justify-content: center;
  text-align: center;
  background-color: rgb(0, 0, 0);
  border: 2px solid rgb(0, 0, 0);

  @media (max-width: 920px) {
    position: relative;
    bottom: 0;
    grid-area: footer;
  }
`;

export const Link = styled.a`
  padding: 20px;
  width: 10%;
  text-decoration: none;
  border: 1px solid rgb(255, 255, 255);
  font-size: 30px;
  
  &:hover {
    opacity: 0.7;
  }
  
  @media (max-width: 920px) {
    width: 20%;
  }

  @media (max-width: 360px) {
    width: 30%;
  }
`;