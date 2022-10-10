import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  background-color: rgb(0,0,0,0.5);
`;

const Main = styled.main` 
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h1 {
    font-family: 'Times New Roman';
    font-weight: bold;
    font-size: 3em;
    color: #FFF;
  }

  span {
    font-size: 1em;
    color: #777777;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  color: #FFF;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 0, 0,0.1);
  border: 0.15em solid transparent;
  border-image: linear-gradient(to right, #ae00ff, #4400AA);
  border-image-slice: 1;
  margin: 0.2em;
  padding: 0.5em;
  color: #FFF;

  &:hover {
    position: relative;
    transition: 1s;
    cursor: pointer;
    border-image: linear-gradient(to left, #ae00ff, #4400AA);
    border-image-slice: 1;    
    top: -0.4em;
  }

  @media (min-width: 890px) {
    width: 8%;
  }

  @media (425px <= width<= 890px) {
    width: 15%;
  }

  @media (max-width: 425px) {
    width: 22%;
  } 
`;

export { Flex, Item, Page, Main, Title };