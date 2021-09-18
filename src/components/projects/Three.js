import { localizedStrings } from '../../constants'
import { useSelector } from 'react-redux'
import { 
  Project,
  Content,
  Image,
  Title,
  Text,
} from './style'

export default function WorkThree() {

  const {
    language
  } = useSelector(state => state)

  return (
    <div>
      <Project>
        <Image src="./img/php.jpg" alt="Projetos desenvolvidos com php" />
        <Content>
          <Title>{ localizedStrings[language].title.loginPHP }</Title>
          <Text>{ localizedStrings[language].content.loginPHP }</Text>
        </Content>
      </Project>
      <br />
      <Project>
        <Image src="https://programathor.com.br/blog/wp-content/uploads/2017/11/programathor-676x355.jpg"
          alt="Programathor" />
        <Content>
          <Title>{ localizedStrings[language].title.dashboard }</Title>
          <Text>{ localizedStrings[language].content.dashboard }</Text>
        </Content>
      </Project>
      <br />
      <Project>
        <Image src="./img/robot.jpg" alt="Projeto Next" />
        <Content>
          <Title>{ localizedStrings[language].title.next }</Title>
          <Text>{ localizedStrings[language].content.next }</Text>
        </Content>
      </Project>
    </div>
  )
}