import styled from 'styled-components'

export const StyledMenu = styled.span(props => ({
  position: 'fixed',
  fontSize: '35px',
  cursor: 'pointer',
  zIndex: '1',
  ...props
}))