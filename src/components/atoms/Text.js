import styled from 'styled-components'
import { colors, dimensions } from '../../styles'

const Text = styled.p`
  color: ${({ color }) => color || colors.font.base};
  font-size: ${({ fontSize }) => fontSize || dimensions.font.base};
  font-weight: ${({fontWeight}) => fontWeight};
  margin: ${({margin}) => margin};
  position: ${({position}) => position};
  top: ${({top}) => top};
  left: ${({left}) => left};
`

export default Text
