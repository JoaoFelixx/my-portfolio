import { Link } from 'react-router-dom';
import { Nav } from './style';

export function NavBar() {
	return (
		<Nav>
			<ul>
		    <li><Link to="/"> Home </Link></li>
		    <li><Link to="/projects"> Projetos </Link></li>
		  </ul>
		</Nav>
	)
}