import styled from 'styled-components'

export const StyledJumbotron = styled.div(props => ({
  padding: '16px',
  position: 'relative',
  top: '70px',
  color: 'rgb(255,255,255)',
  gridArea: 'jumbotron',
  backgroundColor:' #161515',
  ...props
}))