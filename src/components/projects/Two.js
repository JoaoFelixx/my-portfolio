import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux'
import { 
  Project,
  Content,
  Title,
  Text,
  Image,
} from './style';

export default function WorkTwo() {

  const {
    language
  } = useSelector(state => state)

  return (
    <div>
      <Project>
        <Image src="https://cdn.pixabay.com/photo/2015/04/23/17/41/node-js-736399_960_720.png" alt="NodeJS projects" />
        <Content>
          <Title>{ localizedStrings[language].title.fsNode }</Title>
          <Text>{ localizedStrings[language].content.fsNode }</Text>
        </Content>
      </Project>
      <br />
      <Project>
        <Image src="https://fernandofranzini.files.wordpress.com/2017/07/nodejs-2-562x3092x-op.png" alt="NodeJS projects" />
        <Content>
          <Title>{ localizedStrings[language].title.api }</Title>
          <Text>{ localizedStrings[language].content.api }</Text>
        </Content>
      </Project>
      <br />
      <Project>
        <Image src="./img/login.jpg" alt="Login System" />
        <Content>
          <Title>{ localizedStrings[language].title.loginSimulator }</Title>
          <Text>{ localizedStrings[language].content.loginSimulator }</Text>
        </Content>
      </Project>
    </div>
  )
}