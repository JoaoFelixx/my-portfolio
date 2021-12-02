import { StyledJumbotron } from './style';

export const Jumbotron = ({ title }) => {
  return (
    <StyledJumbotron id="Project">
      <h1 style={{ color: '#fff' }}> { title } </h1>
    </StyledJumbotron>
  )
}