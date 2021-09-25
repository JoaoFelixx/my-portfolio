import styled from 'styled-components'

export const StyledSidenav = styled.div(props => ({
  height: '100%',
  width: '0',
  position: 'fixed',
  zIndex: '1',
  top: '0',
  left: '0',
  backgroundColor: '#000000',
  overflowX: 'hidden',
  transition: '0.5s',
  paddingTop: '60px',
  opacity: '0.8',
  ...props
}))

export const SideButtons = styled.a`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  border: 1px solid rgb(34, 36, 37);
  &:hover {
    transition: 1s;
    background-color: #1878D1;
    color: #fff;
    text-decoration: none;
  }
`;
  
export const CloseButton = styled.a`
  position: absolute;
  top: 0;
  right: 25px;
  margin-left: 50px;  
  color: white;
  font-size: 36px;
  &:hover {
    transition: 0.5s;
    color: red;
    cursor: pointer;
  }
`;

export const PreferencesDiv = styled.div`
  padding: 8px 8px 8px 32px;

`;