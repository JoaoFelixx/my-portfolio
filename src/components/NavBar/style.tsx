import styled from 'styled-components';

const Nav = styled.nav`
	position: absolute;
	width: 100%;
	height: 50px;

	ul {
		list-style-type:none;
		margin: 0;
	  padding: 0;
	  overflow: hidden;
	}

	li {
	  float: left;
	  font-size: 1.2em;
	}

	li a {
	  display: block;
	  color: white;
	  text-align: center;
	  padding: 16px;
	  text-decoration: none;
	}

	li a:hover {
		transition: 1s;
	  border-bottom: 2px solid #fff;
	}
`;

export { Nav }