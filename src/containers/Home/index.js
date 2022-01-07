import {
  Menu,
  Header,
  Footer,
  MySelf,
  Sidenav,
  History,
} from '../../components';
import { localizedStrings } from '../../constants';
import { GridAreas } from './style';

function Home() {
  return (
    <div>
      <Menu />
      <GridAreas>
        <Header title={localizedStrings.myPortfolio} subTitle={localizedStrings.welcome} />
        <Sidenav />
        <History />
        <MySelf />
        <Footer />
      </GridAreas>
    </div>
  )
}

export default Home;