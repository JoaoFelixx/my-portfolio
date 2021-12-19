import {
  Footer,
  Header,
  History,
  Menu,
  MySelf,
  Sidenav,
} from '../../components';
import { localizedStrings } from '../../constants';
import { GridAreas } from './style';

export const Home = () => {
  return (
    <div>
      <Menu />
      <GridAreas>
        <Header title={localizedStrings.myPortfolio} subTitle={localizedStrings.welcome} />
        <Sidenav />
        <History />
        <MySelf />
      </GridAreas>
      <Footer />
    </div>
  )
}