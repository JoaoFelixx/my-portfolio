import styled from 'styled-components';

const Head = styled.div`
  grid-area: header;
  text-align: center;
  align-items: center;
`;

const Title = styled.h1` 
  transition: 0.5s;
  color: #fff;
`;

const Span = styled.span`
  padding: 4px;
  font-size: 18px;
  transition: 0.5s;
  color: #fff;
`;

export {
  Title,
  Head,
  Span,
}