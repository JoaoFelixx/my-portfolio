import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  Contact,
  Header,
  History,
  Menu,
  MySelf,
  Jumbotron,
  Sidenav,
  Center,
  LeftSide,
  RightSide,
} from '../../components';
import { GridAreas, Body } from './style';

export const Home = () => {

  const [colorBody,setColorBody] = useState({})
  const {
    theme
  } = useSelector(state => state)
  
  useEffect(() => {
    if (theme === 'white') {
      setColorBody({ backgroundColor: '#fff', transition: '1s' })
      document.body.style.transition = '1s'
      document.body.style.backgroundColor = '#fff';
      return    
    }
    
    setColorBody({ backgroundColor: '#1C1C1C', transition: '1s' })
    document.body.style.transition = '1s' 
    document.body.style.backgroundColor = '#1C1C1C';
  },[theme])

  return (
    <Body style={colorBody}>
      <Menu/>
      <GridAreas>
        <Sidenav/>
        <Header/>
        <History/>
        <MySelf/>
        <Jumbotron/>
        <LeftSide/>
        <Center/>
        <RightSide/>
      </GridAreas>
      <Contact/>
    </Body>
  )
}
