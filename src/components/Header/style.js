import styled from 'styled-components';

export const StyledHeader = styled.div(props => ({
  gridArea: 'header',
  textAlign: 'center',
  alignItems: 'center',
  ...props
}))

export const StyledH1 = styled.h1(props => ({
  ...props
}))

export const StyledSpan = styled.span(props => ({
  padding: '4px',
  fontSize: '18px',
  ...props
}))