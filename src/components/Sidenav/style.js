import styled from 'styled-components'

 const Nav = styled.div`
  position: fixed;
  width: ${props => props.sidenavIsOpen ? '300px' : '0px' };
  height: 100%;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0,0,0,0.8);
  overflow-X: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

 const SideBtn = styled.button`
  width: 100%;
  background-color: rgb(0,0,0,0.1);
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  text-align: left;  
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  border: 1px solid rgb(34, 36, 37);
  cursor: pointer;

  &:hover {
    transition: 1s;
    background-color: #1878D1;
    color: #fff;
    text-decoration: none;
  }
`;
  
 const CloseBtn = styled.a`
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

 const Preferences = styled.div`
  padding: 8px 8px 8px 32px;
`;

export {
  Nav,
  SideBtn,
  CloseBtn,
  Preferences,
}