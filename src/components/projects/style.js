import styled from 'styled-components'

export const Project = styled.div`
  position: relative;
  top: 75px;
  box-shadow: inset 0 0 1em transparent, 0 0 1em rgb(0, 0, 0);
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
  border: 1px solid #000000;
  height: auto;
  width: 100%;
  max-width: 100%;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
`;

export const Content = styled.div`
  padding: 10px;
`;

export const Image = styled.img`
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

export const Title = styled.h3`
  font-weight: bold;
`;

export const Text = styled.p`
  font-size: 18px;
`;

export const Link = styled.button`
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



