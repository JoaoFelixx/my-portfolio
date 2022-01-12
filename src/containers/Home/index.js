import {
  Menu,
  Body,
  Footer,
  MySelf,
  Sidenav,
  History,
  Presentation,
  FlexContainer,
} from '../../components';

function Home() {
  return (
    <Body>
      <Menu />
      <Sidenav />
      <Presentation /> 
      <FlexContainer style={{ width: '100%', flexDirection: 'column' }}>
        <MySelf />
        <History />
      </FlexContainer>
      <Footer />
    </Body>
  )
}

export default Home;