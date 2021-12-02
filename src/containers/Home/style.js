import styled from 'styled-components';

export const GridAreas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "header       header       header" 
                      "history      history      myself";
  grid-gap: 20px 20px;
  margin: 10px;
  @media (max-width: 920px) {
    justify-content: center;
    grid-template-columns: 95%;
    grid-template-areas: "header" 
                         "history" 
                         "myself";
    margin: 0px;
  }
`;

export const Body = styled.div`
  margin: 0;
  padding: 0;
  background-image: url('./img/background.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  background-size: cover;
  height: auto;
`;