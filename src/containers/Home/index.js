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
} from '../../components'
import { GridAreas, Body } from './style'

export const Home = () => {
  return (
    <Body>
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