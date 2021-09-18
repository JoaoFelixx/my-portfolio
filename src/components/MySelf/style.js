import styled from 'styled-components'

export const MySelfDiv = styled.div(props => ({
  position: 'relative',
  padding: '5px',
  top: '5%',
  boxShadow: 'inset 0 0 1em transparent, 0 0 1em rgb(0, 0, 0)',
  gridArea: 'myself',
  ...props
}))

export const Content = styled.div(props => ({
  padding: '16px',
  ...props
})) 