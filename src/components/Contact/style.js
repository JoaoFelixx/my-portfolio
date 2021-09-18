import styled from 'styled-components'

export const StyledFooter = styled.footer(props => ({
  position: 'relative',
  top: '100px',
  width: '100%',
  backgroundColor: 'rgb(0, 0, 0)',
  color: '#ffffff',
  textAlign: 'center',
  alignItems: 'center',
  ...props
}))

export const Link = styled.a(props => ({
  fontSize: '40px',
  padding: '20px',
  width: '10%',
  justifyContent: 'center',
  textAlign: 'center',
  textDecoration: 'none',
  border: '1px solid rgb(255, 255, 255)',
  margin: '5px 2px',
  ...props
}))