import styled from 'styled-components';
import { colors, dimensions} from '../../styles'

const Title = styled.p`
    font-size: ${({fontSize}) => fontSize || dimensions.font.h1};
    color: ${({ color }) => color || colors.font.headings};
    font-weight: ${({fontWeight}) => fontWeight};
    position: ${({position}) => position};
    top: ${({top}) => top};
    left: ${({left}) => left};
    margin: ${({margin}) => margin};
    text-overflow: ${({textOverflow}) => textOverflow};
    overflow: ${({overflow}) => overflow};
    white-space: ${({whiteSpace}) => whiteSpace};
    width: ${({width}) => width}
`
export default Title