import { useEffect, useState } from 'react';
import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux';
import {
  Menu,
  Footer,
  Header,
  Sidenav,
  Jumbotron,
  CardProject,
  FlexContainer,
} from '../../components';

function Project() {

  const [styleContent, setStyleContent] = useState({});
  const [styleTitle, setStyleTitle] = useState({});
  const { theme } = useSelector(state => state);

  useEffect(() => {

    if (theme === 'white') {
      setStyleContent({ backgroundColor: '#fff', color: '#000000' });
      setStyleTitle({ color: '#000000' });
      return
    }

    setStyleContent({ backgroundColor: '#4F4F4F', color: '#fff' });
    setStyleTitle({ color: '#fff' });
  }, [theme])

  return (
    <div>
      <Menu />
      <div>
        <Header title={localizedStrings.myPortfolio} subTitle={localizedStrings.myProjects} />
        <br />
        <Sidenav />

        <Jumbotron title={localizedStrings.frontProject} />

        <FlexContainer>
          <CardProject
            src='./img/quiz.jpg'
            alt='Jogo de Quiz desenvolvido com JS'
            text={localizedStrings.content.quiz}
            link='https://joaofelixx.github.io/app_quiz/'
            title={localizedStrings.title.quiz}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/programathor.jpg'
            alt='Programathor'
            text={localizedStrings.content.dashboard}
            link='https://joaofelixx.github.io/dashboard-programathor/'
            title={localizedStrings.title.dashboard}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/tese.jpg'
            alt='Tese Mobilidade Company'
            text={localizedStrings.content.tese}
            link='https://joaofelixx.github.io/tesemobilidade/'
            title={localizedStrings.title.tese}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />
        </FlexContainer>

        <FlexContainer>
          <CardProject
            src='./img/next.jpg'
            alt='Projeto Next'
            text={localizedStrings.content.next}
            link='https://joaofelixx.github.io/robot-chat/'
            title={localizedStrings.title.next}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/felixflix.jpg'
            alt='Felixflix'
            text={localizedStrings.content.felixflix}
            link='https://felixflix.netlify.app'
            title={localizedStrings.title.felixflix}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/starwars.jpg'
            alt='Star Wars'
            text={localizedStrings.content.starWars}
            link='https://star-wars-api-info.netlify.app/'
            title={localizedStrings.title.starWars}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />
        </FlexContainer>

        <Jumbotron title={localizedStrings.backProject} />

        <FlexContainer>
          <CardProject
            src='./img/node.jpg'
            alt='NodeJS Fs(File System)'
            text={localizedStrings.content.fsNode}
            link='https://github.com/JoaoFelixx/system-files-nodejs'
            title={localizedStrings.title.fsNode}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/serverjs.jpg'
            alt='Api Rest com express e JS'
            text={localizedStrings.content.apiJsExpress}
            link='https://github.com/JoaoFelixx/test-FullstackJSJunior'
            title={localizedStrings.title.apiJsExpress}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/serverts.jpg'
            alt='Api Rest com express e TS'
            text={localizedStrings.content.apiTsExpress}
            link='https://github.com/JoaoFelixx/api-with-typescript'
            title={localizedStrings.title.apiTsExpress}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />
        </FlexContainer>

        <FlexContainer>
          <CardProject
            src='./img/server.jpg'
            alt='NodeJS - API'
            text={localizedStrings.content.api}
            link='https://github.com/JoaoFelixx/API-nodeJS'
            title={localizedStrings.title.api}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/mysqljs.jpg'
            alt='Api Rest JS com MySQL'
            text={localizedStrings.content.apiJSMysql}
            link='https://github.com/JoaoFelixx/api-restful-JS'
            title={localizedStrings.title.apiJSMysql}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/mysqlts.jpg'
            alt='Api Rest TS com MySQL'
            text={localizedStrings.content.apiTSMysql}
            link='https://github.com/JoaoFelixx/product_sales'
            title={localizedStrings.title.apiTSMysql}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />
        </FlexContainer>

        <FlexContainer>
          <CardProject
            src='./img/socket.jpg'
            alt='Sistema de comunicação socket'
            text={localizedStrings.content.serverSocket}
            link='https://github.com/JoaoFelixx/socket.io-server'
            title={localizedStrings.title.serverSocket}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/login-back.jpg'
            alt='Sistema de Login NodeJS'
            text={localizedStrings.content.backendLogin}
            link='https://github.com/JoaoFelixx/api-authentication-login'
            title={localizedStrings.title.backendLogin}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/social-network-api.jpg'
            alt='Api rede social'
            text={localizedStrings.content.serverSocketAuth}
            link='https://github.com/JoaoFelixx/api-with-typescript'
            title={localizedStrings.title.serverSocketAuth}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />
        </FlexContainer>

        <Jumbotron title={localizedStrings.monoProject} />

        <FlexContainer>
          <CardProject
            src='./img/login.jpg'
            alt='Login System'
            text={localizedStrings.content.loginSimulator}
            link='https://joaofelixx.github.io/back-end_simulator_with_js/'
            title={localizedStrings.title.loginSimulator}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/php.jpg'
            alt='Projetos desenvolvidos com php'
            text={localizedStrings.content.loginPHP}
            link='https://github.com/JoaoFelixx/login-system-php'
            title={localizedStrings.title.loginPHP}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />

          <CardProject
            src='./img/customware.jpg'
            alt='Custom Ware Company'
            text={localizedStrings.content.customWare}
            link='https://github.com/JoaoFelixx/CutomWare-php-simulator-ecommerce'
            title={localizedStrings.title.customWare}
            styleTitle={styleTitle}
            styleContent={styleContent}
          />
        </FlexContainer>
        <Footer />
      </div>
    </div>
  )
}

export default Project;