import { Jumbo } from './style';

interface ITitle {
  title: string;
}

function Jumbotron({ title }: ITitle) {
  return (
    <Jumbo id="Project">
      <h1> {title} </h1>
    </Jumbo>
  )
}

export default Jumbotron; 