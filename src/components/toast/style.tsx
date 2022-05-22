import styled from 'styled-components';

interface Props {
	isVisible: boolean;
}

const AlertMessage = styled.span<Props>`
	position: fixed;
	top: 0;
	right: 0;
	padding: 2px;
	width: 300px;
	height: 50px;
	background-color: #fff;
	font-size: 1.2em;
	display: ${props => props.isVisible ? 'flex' : 'none'};
	align-items: center;

	p { margin-left: 4px; }
`;

export { AlertMessage };