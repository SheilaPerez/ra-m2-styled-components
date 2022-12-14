import styled from 'styled-components'
import { colors } from '../../styles'

// El title no tiene diferencia con Text, debería de contener h1, h2, h3...
const Title = styled.p`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color || colors.font.headings};
  position: ${({ position }) => position};
  margin: ${({ margin }) => margin};
  text-overflow: ${({ textOverflow }) => textOverflow};
  overflow: ${({ overflow }) => overflow};
  white-space: ${({ whiteSpace }) => whiteSpace};
  width: ${({ width }) => width};
`
export default Title
