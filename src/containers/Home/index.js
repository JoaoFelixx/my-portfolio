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
    <div style={{ padding: '0', margin: '0' }}>
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