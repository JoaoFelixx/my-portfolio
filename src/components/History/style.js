import styled from 'styled-components'

export const HistoryDiv = styled.div(props => ({
  position: 'relative',
  padding: '5px',
  top: '5%',
  boxShadow: 'inset 0 0 1em transparent, 0 0 1em rgb(0, 0, 0)',
  gridArea: 'history',
  ...props
}))

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
