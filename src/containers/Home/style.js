import styled from 'styled-components';

export const GridAreas = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: "header   header   header" 
                       "history  history  myself"
                       "footer   footer   footer";
  grid-gap: 10px 5px;
  @media (max-width: 920px) {
    justify-content: center;
    grid-template-columns: 100%;
    grid-template-areas: "header" 
                         "history" 
                         "myself"
                         "footer";
    margin: 0px;
  }
`;