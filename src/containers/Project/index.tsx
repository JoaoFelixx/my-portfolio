import {
  Menu,
  Footer,
  Header,
  SideNav,
  Jumbotron,
  CardProject,
  FlexContainer,
} from 'components';
import { Page } from '../style';
import { localizedStrings } from 'constants/localizedStrings';
import Php from 'assets/php.jpg';
import Quiz from 'assets/quiz.jpg';
import Login from 'assets/login.jpg';
import Socket from 'assets/socket.jpg'
import Ourtube from 'assets/ourtube.png';
import MySqlJs from 'assets/mysqljs.jpg';
import MySqlTs from 'assets/mysqlts.jpg';
import StarWars from 'assets/starwars.jpg';
import ServerTs from 'assets/serverts.jpg';
import Felixflix from 'assets/felixflix.jpg';
import LoginBack from 'assets/login-back.jpg';
import CustomWare from 'assets/customware.jpg';
import SocketClient from 'assets/socket-client.jpg';
import PrivateMarket from 'assets/mercado-privado.jpg';

function Project() {
  return (
    <Page>
      <Menu />
      <SideNav />
      <Header title={localizedStrings.myPortfolio} subTitle={localizedStrings.myProjects} />
      <Jumbotron title={localizedStrings.frontProject} /><br />
      <FlexContainer style={{ flexWrap: 'wrap' }}>
        <CardProject
          src={Ourtube}
          alt='Clone Youtube "Ourtube"'
          text={localizedStrings.content.frontOurtube}
          link='https://github.com/JoaoFelixx/ourtube-front'
          title={localizedStrings.title.frontOurtube}
        />

        <CardProject
          src={Quiz}
          alt='Jogo de Quiz desenvolvido com JS'
          text={localizedStrings.content.quiz}
          link='https://joaofelixx.github.io/app_quiz/'
          title={localizedStrings.title.quiz}
        />

        <CardProject
          src={Felixflix}
          alt='Felixflix'
          text={localizedStrings.content.felixflix}
          link='https://felixflix.netlify.app'
          title={localizedStrings.title.felixflix}
        />

        <CardProject
          src={StarWars}
          alt='Star Wars'
          text={localizedStrings.content.starWars}
          link='https://star-wars-api-info.netlify.app/'
          title={localizedStrings.title.starWars}
        />

        <CardProject
          src={PrivateMarket}
          alt='Mercado Privado'
          text={localizedStrings.content.privateMarket}
          link='https://mercadoprivado.netlify.app/'
          title={localizedStrings.title.privateMarket}
        />

        <CardProject
          src={SocketClient}
          alt='Socket Client'
          text={localizedStrings.content.clientSocket}
          link='https://github.com/JoaoFelixx/socket.io-client'
          title={localizedStrings.title.clientSocket}
        />
      </FlexContainer>

      <Jumbotron title={localizedStrings.backProject} /><br />
      <FlexContainer style={{ flexWrap: 'wrap' }}>

        <CardProject
          src={Ourtube}
          alt='Clone Youtube "Ourtube"'
          text={localizedStrings.content.backOurtube}
          link='https://github.com/JoaoFelixx/ourtube-back'
          title={localizedStrings.title.backOurtube}
        />

        <CardProject
          src={ServerTs}
          alt='Api Rest com express e TS'
          text={localizedStrings.content.apiTsExpress}
          link='https://github.com/JoaoFelixx/api-with-typescript'
          title={localizedStrings.title.apiTsExpress}
        />

        <CardProject
          src={MySqlJs}
          alt='Api Rest JS com MySQL'
          text={localizedStrings.content.apiJSMysql}
          link='https://github.com/JoaoFelixx/api-restful-JS'
          title={localizedStrings.title.apiJSMysql}
        />

        <CardProject
          src={MySqlTs}
          alt='Api Rest TS com MySQL'
          text={localizedStrings.content.apiTSMysql}
          link='https://github.com/JoaoFelixx/product_sales'
          title={localizedStrings.title.apiTSMysql}
        />

        <CardProject
          src={Socket}
          alt='Sistema de comunicação socket'
          text={localizedStrings.content.serverSocket}
          link='https://github.com/JoaoFelixx/socket-io-server'
          title={localizedStrings.title.serverSocket}
        />

        <CardProject
          src={LoginBack}
          alt='Sistema de Login NodeJS'
          text={localizedStrings.content.backendLogin}
          link='https://github.com/JoaoFelixx/api-authentication-login'
          title={localizedStrings.title.backendLogin}
        />
      </FlexContainer>

      <Jumbotron title={localizedStrings.monoProject} /><br />
      <FlexContainer>
        <CardProject
          src={Login}
          alt='Login System'
          text={localizedStrings.content.loginSimulator}
          link='https://joaofelixx.github.io/back-end_simulator_with_js/'
          title={localizedStrings.title.loginSimulator}
        />

        <CardProject
          src={Php}
          alt='Projetos desenvolvidos com php'
          text={localizedStrings.content.loginPHP}
          link='https://github.com/JoaoFelixx/login-system-php'
          title={localizedStrings.title.loginPHP}
        />

        <CardProject
          src={CustomWare}
          alt='Custom Ware Company'
          text={localizedStrings.content.customWare}
          link='https://github.com/JoaoFelixx/CutomWare-php-simulator-ecommerce'
          title={localizedStrings.title.customWare}
        />
      </FlexContainer><br />
      <Footer />
    </Page>
  )
}

export default Project;