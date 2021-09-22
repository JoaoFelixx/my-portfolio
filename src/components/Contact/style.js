import styled from 'styled-components'

export const StyledFooter = styled.footer(props => ({
  position: 'relative',
  top: '100px',
  width: '100%',
  backgroundColor: 'rgb(0, 0, 0)',
  textAlign: 'center',
  alignItems: 'center',
  ...props
}))

export const Link = styled.a`
  padding: 20px;
  width: 10%;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  border: 1px solid rgb(255, 255, 255);
  margin: 5px 2px;
  font-size: 30px;
  
  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 920px) {
    width: 20%;

  }
`;