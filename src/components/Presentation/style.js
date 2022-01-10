import styled from 'styled-components';

export const Body = styled.div`
  width: 100%;
  height: 700px;
  background-color: rgb(0,0,0,0.7);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  color: #ffffff;
`; 

export const Span = styled.span`
  font-size: 25px;
  background-color: #777777;
  color: #fff;
`;