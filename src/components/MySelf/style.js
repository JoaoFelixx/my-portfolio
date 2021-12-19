import styled from 'styled-components'

export const CardMySelf = styled.div`
  position: relative;
  padding: 5px;
  top: 5%;
  box-shadow: inset 0 0 1em transparent, 0 0 1em rgb(0, 0, 0);
  grid-area: myself;

  @media (max-width: 820px) {
    top: 0;
  }
`;


export const Content = styled.div(props => ({
  padding: '16px',
  fontSize: '18px',
  fontWight: 'bold',
  ...props
})) 

export const Image = styled.img(props => ({
  width: '100%',
  ...props
}))

export const Text = styled.p(props => ({
  fontSize: '18px',
  ...props
}))
