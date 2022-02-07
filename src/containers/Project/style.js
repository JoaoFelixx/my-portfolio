import styled from 'styled-components';

const Flex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
	@media (max-width: 1024px) { justify-content: space-around; }
  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
  }
`;

export {
  Flex,
}