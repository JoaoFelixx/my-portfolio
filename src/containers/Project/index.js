import { localizedStrings } from '../../constants';
import {
  Menu,
  Footer,
  Header,
  Sidenav,
  Jumbotron,
  CardProject,
} from '../../components';
import { Flex } from './style';

function Project() {
  return (
    <div>
      <Menu />
      <div>
        <Header title={localizedStrings.myPortfolio} subTitle={localizedStrings.myProjects} />
        <br />
        <Sidenav />
        <Flex>
          <Jumbotron title={localizedStrings.frontProject} />

          <CardProject
            src='./img/quiz.jpg'
            alt='Jogo de Quiz desenvolvido com JS'
            text={localizedStrings.content.quiz}
            link='https://joaofelixx.github.io/app_quiz/'
            title={localizedStrings.title.quiz}
          />

          <CardProject
            src='./img/programathor.jpg'
            alt='Programathor'
            text={localizedStrings.content.dashboard}
            link='https://joaofelixx.github.io/dashboard-programathor/'
            title={localizedStrings.title.dashboard}
          />

          <CardProject
            src='./img/tese.jpg'
            alt='Tese Mobilidade Company'
            text={localizedStrings.content.tese}
            link='https://joaofelixx.github.io/tesemobilidade/'
            title={localizedStrings.title.tese}
          />

          <CardProject
            src='./img/next.jpg'
            alt='Projeto Next'
            text={localizedStrings.content.next}
            link='https://joaofelixx.github.io/robot-chat/'
            title={localizedStrings.title.next}
          />

          <CardProject
            src='./img/felixflix.jpg'
            alt='Felixflix'
            text={localizedStrings.content.felixflix}
            link='https://felixflix.netlify.app'
            title={localizedStrings.title.felixflix}
          />

          <CardProject
            src='./img/starwars.jpg'
            alt='Star Wars'
            text={localizedStrings.content.starWars}
            link='https://star-wars-api-info.netlify.app/'
            title={localizedStrings.title.starWars}
          />

          <CardProject
            src='./img/login-front.jpg'
            alt='Sistema de Login Front End'
            text={localizedStrings.content.frontEndLogin}
            link='https://github.com/JoaoFelixx/front-authentication-login'
            title={localizedStrings.title.frontEndLogin}
          />

          <CardProject
            src='./img/mercado-privado.jpg'
            alt='Mercado Privado'
            text={localizedStrings.content.privateMarket}
            link='https://mercadoprivado.netlify.app/'
            title={localizedStrings.title.privateMarket}
          />

          <CardProject
            src='./img/socket-client.jpg'
            alt='Socket Client'
            text={localizedStrings.content.clientSocket}
            link='https://github.com/JoaoFelixx/socket.io-client'
            title={localizedStrings.title.clientSocket}
          />

          <Jumbotron title={localizedStrings.backProject} />

          <CardProject
            src='./img/node.jpg'
            alt='NodeJS Fs(File System)'
            text={localizedStrings.content.fsNode}
            link='https://github.com/JoaoFelixx/system-files-nodejs'
            title={localizedStrings.title.fsNode}
          />

          <CardProject
            src='./img/serverjs.jpg'
            alt='Api Rest com express e JS'
            text={localizedStrings.content.apiJsExpress}
            link='https://github.com/JoaoFelixx/api-restful-file-system'
            title={localizedStrings.title.apiJsExpress}
          />

          <CardProject
            src='./img/serverts.jpg'
            alt='Api Rest com express e TS'
            text={localizedStrings.content.apiTsExpress}
            link='https://github.com/JoaoFelixx/api-with-typescript'
            title={localizedStrings.title.apiTsExpress}
          />

          <CardProject
            src='./img/server.jpg'
            alt='NodeJS - API'
            text={localizedStrings.content.api}
            link='https://github.com/JoaoFelixx/API-nodeJS'
            title={localizedStrings.title.api}
          />

          <CardProject
            src='./img/mysqljs.jpg'
            alt='Api Rest JS com MySQL'
            text={localizedStrings.content.apiJSMysql}
            link='https://github.com/JoaoFelixx/api-restful-JS'
            title={localizedStrings.title.apiJSMysql}
          />

          <CardProject
            src='./img/mysqlts.jpg'
            alt='Api Rest TS com MySQL'
            text={localizedStrings.content.apiTSMysql}
            link='https://github.com/JoaoFelixx/product_sales'
            title={localizedStrings.title.apiTSMysql}
          />

          <CardProject
            src='./img/socket.jpg'
            alt='Sistema de comunicação socket'
            text={localizedStrings.content.serverSocket}
            link='https://github.com/JoaoFelixx/socket-io-server'
            title={localizedStrings.title.serverSocket}
          />

          <CardProject
            src='./img/login-back.jpg'
            alt='Sistema de Login NodeJS'
            text={localizedStrings.content.backendLogin}
            link='https://github.com/JoaoFelixx/api-authentication-login'
            title={localizedStrings.title.backendLogin}
          />

          <CardProject
            src='./img/social-network-api.jpg'
            alt='Api rede social'
            text={localizedStrings.content.serverSocketAuth}
            link='https://github.com/JoaoFelixx/api-with-typescript'
            title={localizedStrings.title.serverSocketAuth}
          />

          <Jumbotron title={localizedStrings.monoProject} />

          <CardProject
            src='./img/login.jpg'
            alt='Login System'
            text={localizedStrings.content.loginSimulator}
            link='https://joaofelixx.github.io/back-end_simulator_with_js/'
            title={localizedStrings.title.loginSimulator}
          />

          <CardProject
            src='./img/php.jpg'
            alt='Projetos desenvolvidos com php'
            text={localizedStrings.content.loginPHP}
            link='https://github.com/JoaoFelixx/login-system-php'
            title={localizedStrings.title.loginPHP}
          />

          <CardProject
            src='./img/customware.jpg'
            alt='Custom Ware Company'
            text={localizedStrings.content.customWare}
            link='https://github.com/JoaoFelixx/CutomWare-php-simulator-ecommerce'
            title={localizedStrings.title.customWare}
          />
        </Flex>
        <br />
        <Footer />
      </div>
    </div>
  )
}

export default Project;