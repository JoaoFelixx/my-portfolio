import { localizedStrings } from '../../constants';
import { useSelector } from 'react-redux'
import { 
  Project,
  Content,
  Image,
  Title,
  Text,
} from './style'

export default function WorksOne() {

  const {
    language
  } = useSelector(state => state)

  return (
    <div >
      <Project>
        <Image src="./img/tesem.png" alt="Tese Mobilidade Company" />
        <Content> 
          <Title>{ localizedStrings[language].title.tese }</Title>
          <Text>{ localizedStrings[language].content.tese }</Text>
        </Content>
      </Project>
      <br />
      <Project>
        <Image src="./img/appquiz.png" alt="Jogo de Quiz desenvolvido com JS" />
        <Content> 
          <Title>{ localizedStrings[language].title.quiz }</Title>
          <Text>{ localizedStrings[language].content.quiz }</Text>
        </Content>
      </Project>
      <br />
      <Project>
        <Image src="./img/customware.png" alt="Custom Ware Company" />
        <Content>
          <Title>{ localizedStrings[language].title.customWare }</Title>
          <Text>{ localizedStrings[language].content.customWare }</Text>
        </Content> 
      </Project>
    </div>
  )
}