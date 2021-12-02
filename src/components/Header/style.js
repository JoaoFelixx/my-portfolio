import styled from 'styled-components';

export const Head = styled.div(props => ({
  gridArea: 'header',
  textAlign: 'center',
  alignItems: 'center',
  ...props
}))

export const Title = styled.h1(props => ({
  ...props
}))

export const Span = styled.span(props => ({
  padding: '4px',
  fontSize: '18px',
  ...props
}))