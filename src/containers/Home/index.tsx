import {
  NavBar,
  SideNav,
  Presentation,
} from 'components';
import { Page } from '../style';

function Home() {
  return (
    <Page>
      <NavBar />
      <SideNav />
      <Presentation />
    </Page>
  )
}

export default Home;