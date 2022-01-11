import styled from 'styled-components';

const FlexContainer = styled.div`
	display: flex;
  flex-direction: row;
  justify-content: space-around;
  
  @media (max-width: 820px) { flex-direction: column; }
`;

export default FlexContainer;