import styled from 'styled-components';

const Body = styled.div`
  width: auto;
  height: 100vh;
  background-color: rgb(0,0,0,0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-weight: normal;
  font-size: 50px;
  color: #ffffff;
`;

const Span = styled.span`
  font-size: 25px;
  padding: 10px;
  background-color: #000000;
  color: #fff;
`;

export {
  Body,
  Span,
  Title,
  Content,
}