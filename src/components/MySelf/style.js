import styled from 'styled-components'

export const CardMySelf = styled.div`
  background-color: #777777;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 10px;
  padding: 5px;
  box-shadow: inset 0 0 1em transparent, 0 0 1em rgb(0, 0, 0);
`;

export const Content = styled.div`
  width: 60%;
  font-size: 18px;

  @media (max-width: 920px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 320px;

  @media (max-width: 920px) {
    display: none;
  }
`;

export const Text = styled.p`
  font-size: 18px;
`;