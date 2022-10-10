import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  background-color: rgb(0,0,0,0.5);
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h2`
  text-align: center;
  color: #FFF;

`;

const Item = styled.div`
  min-width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #333333;
  align-items: center;
  border: 0.15em solid transparent;
  border-image: linear-gradient(to right, #777777, #000);
  border-image-slice: 1;
  margin: 0.2em;
  padding: 0.5em;
  color: #FFF;

  &:hover {
    color: #000;
    position: relative;
    transition: 1s;
    background-color: #999999;
    cursor: pointer;
    top: -0.4em;
  }
`;

export { Flex, Item, Page, Title };