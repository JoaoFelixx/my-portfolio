import { localizedStrings } from '../../constants'
import { useSelector } from 'react-redux'
import { 
  StyledHeader, 
  StyledSpan, 
  StyledH1, 
  StyledP, 
} from './style';

export const Header = () => {
  const {
    language,
  } = useSelector(state => state)

  return (
    <StyledHeader>

      <StyledH1>
        { localizedStrings[language].myPortfolio }
      </StyledH1>

      <StyledP>
        <StyledSpan style={{ background: '#000000', color: '#fff' }}>
          { localizedStrings[language].welcome } 
        </StyledSpan> 
      </StyledP>

    </StyledHeader>
  )
}