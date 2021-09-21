import styled from 'styled-components';

export const GridAreas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "header       header       header" 
                      "history      history      myself" 
                      "jumbotron    jumbotron    jumbotron";
  grid-gap: 20px 20px;
  margin: 10px;
  @media (max-width: 920px) {
    justify-content: center;
    grid-template-columns: 95%;
    grid-template-areas: "header" 
                          "history" 
                          "myself" 
                          "jumbotron";
    margin: 0px;
  }
`;

export const Body = styled.div`
  
`;