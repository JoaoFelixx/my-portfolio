import styled from 'styled-components'

export const CardMySelf = styled.div`
  margin: 10px;
  padding: 5px;
  box-shadow: inset 0 0 1em transparent, 0 0 1em rgb(0, 0, 0);

  @media (max-width: 920px) {
    padding: 16px;
  }
`;

export const ContentText = styled.div`
  padding: 16px;
  width: 70%;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const ContentImage = styled.div`
  padding: 16px;
  width: 30%;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  border: 5px solid #fff;
`;

export const Text = styled.p`
  font-size: 22px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: normal;
`;