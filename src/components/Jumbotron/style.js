import styled from 'styled-components'

const Jumbo = styled.div`
  padding: 16px;
  color: rgb(255,255,255);
  grid-area: jumbotron;
  background-color: #000000;
  margin: 10px;

  @media (max-width: 820px) {
    margin: 0;
  }
`;

const Title = styled.h1`
  color: #fff;
`;

export {
  Jumbo,
  Title,
}