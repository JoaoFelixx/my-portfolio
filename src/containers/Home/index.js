import {
  Menu,
  Footer,
  MySelf,
  Sidenav,
  History,
  Presentation,
} from '../../components';

function Home() {
  return (
    <div>
      <Menu />
      <Sidenav />
      <Presentation />
      <MySelf />
      <History />
     <Footer />
    </div>
  )
}

export default Home;