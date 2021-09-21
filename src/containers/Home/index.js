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
  WorkOne,
  WorkTwo,
  WorkThree,
} from '../../components';
import { GridAreas, Body } from './style';

export const Home = () => {

  const {
    theme
  } = useSelector(state => state)

  const [colorBody,setColorBody] = useState({})


  useEffect(() => {

    return theme === 'white' 
      ? setColorBody({ backgroundColor: '#fff', transition: '1s' })
      : setColorBody({ backgroundColor: '#1C1C1C', transition: '1s' }) 

  },[theme])

  return (
    <Body style={colorBody}>
      <Menu />
      <GridAreas>
        <Sidenav />
        <Header />
        <History />
        <MySelf />
        <Jumbotron />
        <WorkOne />
        <WorkTwo />
        <WorkThree />
      </GridAreas>
      <Contact />
    </Body>
  )
}