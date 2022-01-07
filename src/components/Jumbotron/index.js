import { StyledJumbotron } from './style';

function Jumbotron({ title }) {
  return (
    <StyledJumbotron id="Project">
      <h1 style={{ color: '#fff' }}> { title } </h1>
    </StyledJumbotron>
  )
}

export default Jumbotron; 