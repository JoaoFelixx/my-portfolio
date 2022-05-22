import styled from 'styled-components';

const FlexContainer = styled.div`
	display: flex;
  justify-content: space-around;
  overflow-X: hidden;
  
  @media (max-width: 820px) { 
    flex-direction: column; 
    align-items: center;
  }
`;

export default FlexContainer;